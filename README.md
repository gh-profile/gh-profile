[![Build Status](https://travis-ci.org/gh-profile/gh-profile.svg?branch=master)](https://travis-ci.org/gh-profile/gh-profile) [![Go Report Card](https://goreportcard.com/badge/github.com/gh-profile/gh-profile)](https://goreportcard.com/report/github.com/gh-profile/gh-profile) [![License](http://img.shields.io/:license-Apache%202-brightgreen.svg)](http://www.apache.org/licenses/LICENSE-2.0.txt)

# gh-profile

## Development

Install the following dependencies.

| name | version  | download link |
| --- | --- | --- |
| golang | 1.8+ | [gvm](https://github.com/moovweb/gvm) |
| glide | 0.13.0+ | [glide](https://github.com/Masterminds/glide#install) |
| node | 6.10.2+ | [nvm](https://github.com/creationix/nvm) |
| yarn | 0.23.0+ | [yarn](https://yarnpkg.com/lang/en/) |
| typescript | 2.3+ | [typescript](https://www.typescriptlang.org) |

Then, clone the repository.

```sh
$ go get -d github.com/gh-profile/gh-profile
$ cd $GOPATH/src/github.com/gh-profile/gh-profile
```

### ghp-webapp

```sh
cd ghp-webapp
yarn install            # only once
yarn run start:dev:hmr  # localhost:10001
```

### ghp-server

```sh
cd ghp-server
make install       # only once
make run-cont      # localhost:10002
```


## License

[Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)