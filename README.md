# gh-profile

## Development

Install the following dependencies.

| name | version  | download link |
| --- | --- | --- |
| golang | 1.8+ | [gvm](https://github.com/moovweb/gvm) |
| glide | 0.13.0+ | [glide](https://github.com/Masterminds/glide#install) |
| node | 6.9.2+ | [nvm](https://github.com/creationix/nvm) |
| yarn | 0.22.0+ | [yarn](https://yarnpkg.com/lang/en/) |
| typescript | 2.2+ | [typescript](https://www.typescriptlang.org) |

Then, clone the repository.

```sh
$ go get -d github.com/gh-profile/gh-profile
$ cd $GOPATH/src/github.com/gh-profile/gh-profile
```

### ghp-viewer (Front)

```view
# editor
cd ghp-editor
make install       # only once
make run-cont      # localhost:10001
```

### ghp-editor (Server)

```sh
# viewer
cd ghp-viewer
yarn install        # only once
yarn run start:hmr  # localhost:10002
```
