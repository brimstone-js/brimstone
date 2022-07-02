const csv = require('csv')
const fs = require('fs')
const https = require('https')
const path = require('path')

const file = path.resolve(__dirname, '../src/types/Language.ts')
if (fs.existsSync(file)) fs.rmSync(file)

const stream = fs.createWriteStream(file)
https.get('https://iso639-3.sil.org/sites/iso639-3/files/downloads/iso-639-3.tab', res => {
  stream.write('enum Language {\n')
  let header = true
  res
    .pipe(csv.parse({
      delimiter: '\t'
    }))
    .on('data', chunk => {
      const [Id, Part2B, Part2T, Part1, Scope, Language_Type, Ref_Name, Comment] = chunk
      if (header) {
        if (Id !== 'Id') throw new Error('Expected header column 1 to be "Id", received ' + Id)
        if (Part2B !== 'Part2B') throw new Error('Expected header column 2 to be "Part2B", received ' + Part2B)
        if (Part2T !== 'Part2T') throw new Error('Expected header column 3 to be "Part2T", received ' + Part2T)
        if (Part1 !== 'Part1') throw new Error('Expected header column 4 to be "Part1", received ' + Part1)
        if (Scope !== 'Scope') throw new Error('Expected header column 5 to be "Scope", received ' + Scope)
        if (Language_Type !== 'Language_Type') throw new Error('Expected header column 6 to be "Language_Type", received ' + Language_Type)
        if (Ref_Name !== 'Ref_Name') throw new Error('Expected header column 7 to be "Ref_Name", received ' + Ref_Name)
        if (Comment !== 'Comment') throw new Error('Expected header column 8 to be "Comment", received ' + Comment)
        header = false
        return
      }
      stream.write(`  '${Id}' = '${Ref_Name.replace(/'/g, '\\\'')}',\n`)
    })
    .once('end', () => {
      stream.write('}\n\nexport default Language\n')
    })
})
