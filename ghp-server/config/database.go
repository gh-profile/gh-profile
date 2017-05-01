package config

type DatabaseConfig struct {
    Github DatabaseGithubConfig `toml:"github"`
}

type DatabaseGithubConfig struct {
    User string `toml:"user"`
}
