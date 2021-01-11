.PHONY: install
install:
	yarn install --prefer-offline

.PHONY: start
start:
	node ./src/index.js --experimental-modules

.PHONY: download-package
download-package:
	pwd
	mkdir -p ${ROOT_DIR}/manifests/${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSION}
	mkdir -p ${ROOT_DIR}/pkgs/${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSION}
	mkdir -p ${ROOT_DIR}/npm/${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSION}
	mkdir -p ${ROOT_DIR}/built/${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSION}

	curl -o ${ROOT_DIR}/manifests/${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSION}/package.json https://cdn.jsdelivr.net/npm/${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSION}/package.json

	npm v ${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSION} dist.tarball | xargs curl | tar -xvz -C ${ROOT_DIR}/pkgs/${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSION}  --strip-components=1

