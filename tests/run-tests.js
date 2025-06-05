const fs = require('fs');
const path = require('path');
const testsDir = __dirname;

const files = fs.readdirSync(testsDir).filter(f => f.endsWith('.test.js'));
let failures = 0;

files.forEach(file => {
  try {
    require(path.join(testsDir, file));
    console.log(`✓ ${file}`);
  } catch (err) {
    failures++;
    console.error(`✗ ${file}`);
    console.error(err);
  }
});

if (failures > 0) {
  console.error(`\n${failures} test(s) failed`);
  process.exit(1);
} else {
  console.log('\nAll tests passed');
}
