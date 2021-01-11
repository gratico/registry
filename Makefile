.PHONY: install
install:
	yarn install --prefer-offline

.PHONY: start
start:
	node ./src/index.js --experimental-modules

.PHONY: download-package
download-package:
	pwd
	mkdir -p public/manifests/${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSION}
	mkdir -p public/pkgs/${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSION}
	mkdir -p public/npm/${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSION}
	mkdir -p public/built/${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSION}

	curl -o public/manifests/${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSION}/package.json https://cdn.jsdelivr.net/npm/${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSION}/package.json

	npm v ${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSION} dist.tarball | xargs curl | tar -xvz -C public/pkgs/${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSION}  --strip-components=1

