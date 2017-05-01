package config

import (
    "os"
	"time"
    "path"

	arg "github.com/alexflint/go-arg"
    "github.com/mitchellh/go-homedir"
    log "github.com/Sirupsen/logrus"
    "github.com/pkg/errors"
    "github.com/BurntSushi/toml"
)

var RawEnv struct {
	Mode string `arg:"env"`
	Port string `arg:"env"`
}

type Environment struct {
	Mode string
	Port string
}

func GetEnvironment() Environment {
	// Setup default values
	RawEnv.Mode = "DEV" // [DEV, PROD]
	RawEnv.Port = "10002"
	arg.MustParse(&RawEnv)

	return Environment{
		Mode: RawEnv.Mode,
		Port: ":" + RawEnv.Port,
	}
}

// Variables injected from Makefile
var (
	Version   = "undefined"
	BuildTime = "undefined"
	GitCommit = "undefined"
	Started   = time.Now()
)

type Flag struct {
	Version   string
	BuildTime string
	GitCommit string
	Started   string
}

func GetFlag() Flag {
	return Flag{
		Version:   Version,
		BuildTime: BuildTime,
		GitCommit: GitCommit,
		Started:   Started.UTC().Format(time.RFC3339),
	}
}

type Config struct {
	GithubToken string
}

const SECRET_FILE_NAME = ".gh-profile.secret.toml"
const DATABASE_FILE_NAME = ".gh-profile.database.toml"

func GetHomeDirPath() string {
    // use `go-homedir` for cross compile
    homeDirPath, err := homedir.Dir()

    if err != nil || homeDirPath == "" {
        panic(err)
    }

    return homeDirPath
}

func PrepareConfigFilePaths(secretPath string, databasePath string) error {

    // create secret conf if does not exist
    var secret SecretConfig
    if _, err := os.Stat(secretPath); os.IsNotExist(err) {
        fSecret, err := os.OpenFile(secretPath, os.O_WRONLY | os.O_CREATE, 0644)
        if err != nil { return errors.Wrap(err, "Failed to open secret") }

        defer fSecret.Close()
        if err = toml.NewEncoder(fSecret).Encode(&secret); err != nil {
            return errors.Wrap(err, "Failed to encode new secret")
        }
    }

    // decode to check whether existing secret config is valid or not
    if _, err := toml.DecodeFile(secretPath, &secret); err != nil {
        return errors.Wrap(err, "Failed to decode existing secret")
    }

    // create secret conf if does not exist
    var database DatabaseConfig
    if _, err := os.Stat(databasePath); os.IsNotExist(err) {
        fDatabase, err := os.OpenFile(databasePath, os.O_WRONLY | os.O_CREATE, 0644)
        if err != nil { return errors.Wrap(err, "Failed to open database") }

        defer fDatabase.Close()
        if err = toml.NewEncoder(fDatabase).Encode(&database); err != nil {
            return errors.Wrap(err, "Failed to encode new database")
        }
    }

    // decode to check whether existing database config is valid or not
    if _, err := toml.DecodeFile(databasePath, &database); err != nil {
        return errors.Wrap(err, "Failed to decode existing database")
    }

    return nil
}

func SetupConfigFiles() {
    homeDirPath := GetHomeDirPath()
    secretPath := path.Join(homeDirPath, SECRET_FILE_NAME)
    databasePath := path.Join(homeDirPath, DATABASE_FILE_NAME)

    err := PrepareConfigFilePaths(secretPath, databasePath)

    if err != nil {
        log.Fatal(err)
        panic(err)
    }

    log.WithFields(log.Fields{
        "tag": "config",
        "secretFile": secretPath,
        "databaseFile": databasePath,
    }).Info("Preparing config files")
}
