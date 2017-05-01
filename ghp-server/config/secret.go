package config

type SecretConfig struct {
    Github SecretGithubConfig `toml:"github"`
}

type SecretGithubConfig struct {
    Token string `toml:"token"`
}
