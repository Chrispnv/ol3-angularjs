Build instruction for Javascript files
======================================

This folders contains the configuration and extern files for building a compressed file based on the google closure compiler advanced mode of the ol3-angularjs-min.js.

## Build a ol3-angularjs-min.js version

For building a minimize version of the ol3-angularjs javascript code, the project uses the closure compiler together with the plovr tool. Plovr allows to store the compiler settings in a configuration file. Also the `extern` folder contains the necessary extern files for using the compiler in advanced mode.

To build a version of messnetz-min.js run the following command from the `static` folder.

	java -jar build/plovr.jar build build/ol3-angularjs--debug.json

or 

	java -jar build/plovr.jar build --create_source_map ./ol3-angularjs-min.map.js build/ol3-angularjs-debug.json

Further information about plovr and the closure compiler could be found here <a href="http://plovr.com/options.html">[1]</a>, <a href="https://developers.google.com/closure/compiler/docs/api-tutorial3">[2]</a>, <a href="https://developers.google.com/closure/compiler/docs/js-for-compiler">[3]</a> or <a href="https://code.google.com/p/closure-compiler/wiki/Warnings">[4]</a>. 

## Building/compiling the javascript code

The javascript code Building the dependency system from the google closure library

	python lib/closure-library/closure/bin/build/depswriter.py --root_with_prefix="src ../../../../src" > src/ol3-angularjs-deps.js
