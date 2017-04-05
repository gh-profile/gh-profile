package config

import (
	"time"

	arg "github.com/alexflint/go-arg"
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
	RawEnv.Port = "10001"
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
