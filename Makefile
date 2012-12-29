build:
	node r.js -o app/app.build.js

run:
	node server/app.js

.PHONY: build run
