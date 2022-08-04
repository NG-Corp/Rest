# Welcome to Ocr-js-json

This is the successor to this npm package ocr-js-json.
https://www.npmjs.com/package/ocr-js-json is the package.



ocr-js-json-v2 is a package that allows for ocr results. The current version fixes a bug.

Since the package uses tesseract.js to scan the data, when using its important to import tesseract.js too.

With:

var { createWorker } = require("tesseract.js");


Docs


Use the package by doing this:

var ocrJsJson = require("ocr-js-json");
var { createWorker } = require("tesseract.js");

var shl = 'https://tesseract.projectnaptha.com/img/eng_bw.png';

api(shl);


It will console.log the text.


Thanks for using my package! 

PS: The code is hosted on https://github.com/NG-Corp/ocr-js-json


UPDATE: Thanks guys for the downloads. The package is in its beta stage, which has lots of errors. I initially wanted to make it for intergration in my app project, and in the process uploaded it here. You can help me develop it by reporting issues @ https://github.com/NG-Corp/ocr-js-json.