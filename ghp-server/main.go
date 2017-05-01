package main

import (
    "os"
    "net/http"
    "github.com/gh-profile/gh-profile/ghp-server/config"
    "github.com/labstack/echo"
    "github.com/Sirupsen/logrus"
    "github.com/labstack/echo/middleware"
    "github.com/facebookgo/grace/gracehttp"
)

func main() {
    // get env, flags
    flag := config.GetFlag()
    env := config.GetEnvironment()

    // set logger
    logger := logrus.New()
    logger.Formatter = &logrus.JSONFormatter{}
    logOut := os.Stdout
    logLevel := logrus.DebugLevel

    if env.Mode == "PROD" {
        logFile := "gh-profile.log"
        f, err := os.OpenFile(logFile, os.O_WRONLY | os.O_CREATE, 0755)
        if err != nil {
            panic(err)
        }
        logOut = f
        logLevel = logrus.InfoLevel
    }

    logger.Out = logOut
    logger.Level = logLevel

    logger.WithFields(logrus.Fields{ "tag": "flag", }).Info(flag)
    logger.WithFields(logrus.Fields{ "tag": "env", }).Info(env)

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

    // configure handlers
    e.GET("/", func(c echo.Context) error {
        return c.String(http.StatusOK, "Hello, World!")
    })

    // start server
    e.Server.Addr = env.Port
    logger.WithFields(logrus.Fields{ "tag": "app", }).Info("start server")
    gracehttp.Serve(e.Server)
    logger.WithFields(logrus.Fields{ "tag": "app", }).Info("shutdown the server")
    
}
