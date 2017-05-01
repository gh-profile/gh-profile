package api

import (
    "net/http"
    "github.com/labstack/echo"
    //"github.com/google/go-github/github"
    //"context"
    //
    //logger "github.com/Sirupsen/logrus"
)

func SetupHandler(e *echo.Echo) {
    e.GET("/api", getHome)
    e.GET("/api/test", getTest)
}

func getHome(c echo.Context) error {
    return c.String(http.StatusOK, "Hello, World!")
}

func getTest(c echo.Context) error {
    //client := github.NewClient(nil)
    //ctx := context.Background()
    //orgs, _, err := client.Repositories.List(ctx, "1ambda", nil)

    return c.String(http.StatusOK, "test")
}
