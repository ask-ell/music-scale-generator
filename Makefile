dc := docker compose
dr := $(dc) run --rm

.PHONY: install
install: node_modules/time

node_modules/time: yarn.lock
	$(dr) --no-deps pwa yarn
	touch node_modules/time

.PHONY: shell
shell: node_modules/time
	$(dr) --no-deps pwa bash

.PHONY: test
test: node_modules/time
	$(dr) pwa yarn test

.PHONY: test-watch
test-watch: node_modules/time
	$(dr) pwa yarn test:watch

.PHONY: serve
serve: node_modules/time
	$(dc) up -d

.PHONY: expose
expose:
	ngrok http --host-header=rewrite 4200

.PHONY: deploy
deploy: node_modules/time
	$(dr) pwa yarn deploy

.PHONY: clean
clean:
	$(dc) down --volumes