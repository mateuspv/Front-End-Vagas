const fs = require('fs');

fs.readdir('../icons/', (err, f) => {
  const files = f.map(_ => _.replace('.svg', ''))

  fs.writeFile("./icons.json", JSON.stringify(files))
})