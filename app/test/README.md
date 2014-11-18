# Installation instructions 

The javascript test environment is based on karma and jasmine. Also special plugins for using closure are needed.

Install the necessary node modules

	npm init
	npm install karma --save-dev
	npm install jasmine --save-dev
	npm install phantomjs --save-dev
	npm install karma-phantomjs-launcer --save-dev
	npm install karma-closure --save-dev
	npm install karma-jasmine --save-dev

Running the karma launcher

	node_modules/karma/bin/karma start karma.conf.js


