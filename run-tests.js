var Mocha = require('mocha');
var testDir = 'compiled/test/';
var mocha = new Mocha();

Mocha.utils.lookupFiles(testDir, ['js'], true).forEach(mocha.addFile.bind(mocha));

mocha.run(process.exit);
sdf
