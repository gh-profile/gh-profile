.PHONY: build build-alpine clean test help default

GOARCH  = amd64
GOOS    = $(OS)

ifeq ($(GOOS),)
  ifeq ($(shell  uname -s), Darwin)
    GOOS	= darwin
  else
    GOOS	= linux
  endif
endif

GOARCH  = amd64
GOOS    = $(OS)

ifeq ($(GOOS),)
  ifeq ($(shell  uname -s), Darwin)
    GOOS	= darwin
  else
    GOOS	= linux
  endif
endif

APP         = gh-profile
MAIN		= main.go
DIST_DIR	= dist
VENDOR_DIR	= vendor
BIN			= ${DIST_DIR}/${GOOS}-${GOARCH}/${APP}

RM		= rm -rf
GOCMD	= go
GOGET	= $(GOCMD) get -u -v
GOBUILD		= GOOS=$(GOOS) GOARCH=$(GOARCH) $(GOCMD) build
GOINSTALL	= $(GOCMD) install
GODEP	= glide
GOTEST	= ginkgo
GOTEST_OPT	= -r -p -v -cover

# build flags
IMPORTPATH	= "github.com/1ambda/gh-profile/ghp-editor"
VERSION     = "0.0.1"
GIT_COMMIT  =$(shell git rev-parse HEAD)
GIT_DIRTY   =$(shell test -n "`git status --porcelain`" && echo "+CHANGES" || true)

BUILDTIME	= $(shell TZ=UTC date -u '+%Y-%m-%dT%H:%M:%SZ')
LDFLAGS		= -ldflags="-X ${IMPORTPATH}/config.BuildTime=${BUILDTIME} -X ${IMPORTPATH}/config.GitCommit=${GIT_COMMIT}${GIT_DIRTY} -X ${IMPORTPATH}/config.Version=${VERSION}"

all: fclean install lint build-all test
	@echo "[MAKEFILE] all"

lint:
	@echo "\n[MAKEFILE] ($(shell TZ=UTC date -u '+%Y-%m-%dT%H:%M:%SZ')) lint"
	$(GOINSTALL) . # https://github.com/alecthomas/gometalinter/issues/9
	gometalinter --vendor --errors

install:
	@echo "\n[MAKEFILE] ($(shell TZ=UTC date -u '+%Y-%m-%dT%H:%M:%SZ')) install"
	$(GOGET) github.com/Masterminds/glide # for dep
	$(GOGET) github.com/onsi/ginkgo/ginkgo # for test
	$(GOGET) github.com/franciscocpg/gox # for cross compile
	$(GOGET) github.com/githubnemo/CompileDaemon # for reload
	$(GOGET) github.com/alecthomas/gometalinter # for lint
	gometalinter --install --update --force
	$(GODEP) install


build: clean
	@echo "\n[MAKEFILE] ($(shell TZ=UTC date -u '+%Y-%m-%dT%H:%M:%SZ')) build"
	$(GOBUILD) $(LDFLAGS) -i -o ${BIN} -v ${MAIN}

build-all: clean
	@echo "\n[MAKEFILE] ($(shell TZ=UTC date -u '+%Y-%m-%dT%H:%M:%SZ')) build-all"
	gox -verbose \
	$(LDFLAGS) \
	-os="linux darwin windows freebsd openbsd netbsd" \
	-arch="amd64 386 armv5 armv6 armv7 arm64" \
	-osarch="!darwin/arm64" \
	-output="${DIST_DIR}/{{.OS}}-{{.Arch}}/${APP}" .

test:
	@echo "\n[MAKEFILE] ($(shell TZ=UTC date -u '+%Y-%m-%dT%H:%M:%SZ')) test"
	$(GOTEST) $(GOTEST_OPT)

test-cont:
	@echo "\n[MAKEFILE] ($(shell TZ=UTC date -u '+%Y-%m-%dT%H:%M:%SZ')) test-cont"
	$(GOTEST) watch $(GOTEST_OPT)

run:
	${BIN}

run-cont: build
	@echo "\n[MAKEFILE] ($(shell TZ=UTC date -u '+%Y-%m-%dT%H:%M:%SZ')) run-cont"
	CompileDaemon -exclude-dir="${VENDOR_DIR}" -build="make build" -command="make run" -graceful-kill=true

clean:
	@echo "[MAKEFILE] ($(shell TZ=UTC date -u '+%Y-%m-%dT%H:%M:%SZ')) clean"
	find . -type f -name '*.coverprofile' -exec rm {} +
	$(RM) ${DIST_DIR}
	$(RM) vendor/$(IMPORTPATH)

fclean: clean
	@echo "\n[MAKEFILE] ($(shell TZ=UTC date -u '+%Y-%m-%dT%H:%M:%SZ')) fclean"
	$(RM) vendor

help:
	@echo 'Management commands for gh-profile:'
	@echo
	@echo 'Usage:'
	@echo '    make build           Compile the project.'
	@echo '    make get-deps        runs glide install, mostly used for ci.'

	@echo '    make clean           Clean the directory tree.'
	@echo

