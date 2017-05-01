package main

import (
    "os"
    "net/http"
    "github.com/gh-profile/gh-profile/ghp-server/config"
    "github.com/labstack/echo"
    log "github.com/Sirupsen/logrus"
    "github.com/labstack/echo/middleware"
)

func main() {
    // get env, flags
    flag := config.GetFlag()
    env := config.GetEnvironment()


    // set logger
    logOut := os.Stdout
    logLevel := log.DebugLevel

    if env.Mode == "PROD" {
        logFile := "gh-profile.log"
        f, err := os.OpenFile(logFile, os.O_WRONLY | os.O_CREATE, 0755)
        if err != nil {
            panic(err)
        }
        logOut = f
        logLevel = log.InfoLevel
        log.SetFormatter(&log.JSONFormatter{})
    }

    log.SetOutput(logOut)
    log.SetLevel(logLevel)

    log.WithFields(log.Fields{ "tag": "flag", }).Info(flag)
    log.WithFields(log.Fields{ "tag": "env", }).Info(env)

    // setup server
    e := echo.New()
    middleware.DefaultLoggerConfig.Output = logOut
    middlewareLogFormat := `time="${time_rfc3339}" tag="api" id="${id}" remote_ip="${remote_ip}" host="${host}" ` +
        `method="${method}" uri="${uri}" status=${status} latency=${latency} ` +
        `latency_human="${latency_human}" bytes_in=${bytes_in}` +
        `bytes_out=${bytes_out}` + "\n"

    if env.Mode == "PROD" {
        middlewareLogFormat = `{"time":"${time_rfc3339}", "tag": "api", "id":"${id}","remote_ip":"${remote_ip}","host":"${host}", ` +
            `"method":"${method}", "uri":"${uri}", "status":${status}, "latency":${latency}, ` +
            `"latency_human":"${latency_human}", "bytes_in":${bytes_in}, ` +
            `"bytes_out":${bytes_out}}` + "\n"
    }

    middleware.DefaultLoggerConfig.Format = middlewareLogFormat
    e.Use(middleware.Logger())
    e.Use(middleware.Recover())

    e.GET("/", func(c echo.Context) error {
        return c.String(http.StatusOK, "Hello, World!")
    })
    log.Fatal(e.Start(env.Port))
}
