const fs = require('fs');
const path = require('path');

function fail(msg) {
  console.error('FAIL ' + msg);
  process.exit(1);
}

if (!fs.existsSync(path.join(__dirname, '..', 'SGDesktopVideoRecorder.exe'))) fail('exe');
if (!fs.existsSync(path.join(__dirname, '..', 'About'))) fail('about');
console.log('OK SgDvrTests');
