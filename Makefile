#### NODE-BASE-PROJECT ####

# Build node.js via TypeScript
build:
	sh ./bin/build.sh

watch: 
	make gulp target=watch
# Start dev service
dev:
	nodemon ./dist/app.js
	@echo Running service at http://localhost:3000

gulp:
	./node_modules/gulp/bin/gulp.js $(target)

test:
	sh ./bin/test.sh

# Build API documents
docs:
	sh bin/docs.sh

# Build docker image
image:
	sh bin/build-docker-images.sh

# Install node.js packages
install:
	npm install