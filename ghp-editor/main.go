package main

import (
    "fmt"
    "github.com/1ambda/gh-profile/ghp-editor/config"
    "gopkg.in/kataras/iris.v6"
    "gopkg.in/kataras/iris.v6/adaptors/httprouter"
)

func main() {
    flag := config.GetFlag()
    env := config.GetEnvironment()

    fmt.Println("Starting gh-profile")
    fmt.Println(flag)
    fmt.Println(env)

    app := iris.New()
    // Adapt the "httprouter", faster,
    // but it has limits on named path parameters' validation,
    // you can adapt "gorillamux" if you need regexp path validation!
    app.Adapt(httprouter.New())

    app.HandleFunc("GET", "/", func(ctx *iris.Context) {
        ctx.Writef("hello world\n")
    })

    app.Listen(env.Port)
}
