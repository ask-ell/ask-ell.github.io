compose := docker compose
run := $(compose) run --rm -T

node_modules/time:
	$(run) node yarn
	touch node_modules/time

.PHONY: serve
serve: node_modules/time
	$(compose) up -d

.PHONY: shell
shell: node_modules/time
	$(run) node bash

.PHONY: format
format: node_modules/time
	$(run) node yarn format

.PHONY: build
build: node_modules/time
	$(run) node yarn build

.PHONY: clean
clean:
	$(compose) down --volumes