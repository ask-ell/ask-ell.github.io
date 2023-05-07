compose := docker compose
run := $(compose) run --rm -T

node_modules/time:
	$(run) website yarn
	touch node_modules/time

.PHONY: serve
serve: node_modules/time
	$(compose) up

.PHONY: build
build: node_modules/time
	$(run) website yarn build

.PHONY: clean
clean:
	$(compose) down --volumes