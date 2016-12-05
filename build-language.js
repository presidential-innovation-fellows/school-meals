var fs = require('fs');
var jsonfile = require('jsonfile');
var recursiveReadSync = require('recursive-readdir-sync');
var files;
var IN_DIR = 'i18n/descriptors/';
var OUT_FILE = 'translations/EMPTY.json';

// get names of message definition files
try {
  files = recursiveReadSync(IN_DIR);
} catch (err) {
  if (err.errno === 34) {
    console.log('Path does not exist: ' + IN_DIR);
  } else {
    //something unrelated went wrong, rethrow
    throw err;
  }
}

console.log('Looping over files:\n');
console.log(files);

// open file for writing
var out = fs.createWriteStream(OUT_FILE);
out.write('{');

// loop over all message definition files.
for (var i = 0, n = files.length; i < n; i++) {
  var file = files[i];
  var arr = jsonfile.readFileSync(file);
  var displayFile = file.replace(IN_DIR, '').replace(/\.json$/, '.jsx');

  out.write('\n');
  out.write('  /***\n');
  out.write('   *** ' + displayFile + '\n');
  out.write('   ***/\n');

  // loop over each message deinition in the file
  for (var j = 0, m = arr.length; j < m; j++) {
    var def = arr[j]
    out.write('\n');
    out.write('  // ' + def.description + '\n');
    out.write('  // English: "' + def.defaultMessage + '"\n');
    out.write('  "' + def.id + '": "",\n');
  }

  out.write('\n');
}

// finish and close output file
out.write('\n  /***/\n');
out.write('\n  "NOTE": "All comments must be deleted before use (to create a valid JSON file). Message definitions version ' + new Date().getTime() + '."\n');
out.end('}\n');
