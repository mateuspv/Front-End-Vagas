'use strict';

const fs = require('fs');

const LOGOS_PATH = './src/assets/techlogos/'
const OUTPUT_PATH = './src/components/techlogo/identifyTechnologies/icons.json'

fs.readdir(LOGOS_PATH, (err, f) => {
  const files = f.map(_ => _.replace('.svg', ''))

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(files))
})