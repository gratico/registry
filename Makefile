.PHONY: install
install:
	yarn install --prefer-offline

.PHONY: bundle-package
bundle-package:
	mkdir -p public/manifests/${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSON}
	mkdir -p public/pkgs/${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSON}
	mkdir -p public/npm/${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSON}
	mkdir -p public/built/${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSON}

	curl -o public/manifests/${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSON}/package.json https://cdn.jsdelivr.net/npm/${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSON}/package.json

	npm v ${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSON} dist.tarball | xargs curl | tar -xvz -C public/pkgs/${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSON}  --strip-components=1
#	./node_modules/.bin/rollup -f es --dir ./public/npm/${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSON}/ --sourcemap --plugin @rollup/plugin-commonjs --preserveModules --no-treeshake -- ./public/pkgs/${NPM_PACKAGE_NAME}@${NPM_PACKAGE_VERSON}/index.js

