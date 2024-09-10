//const fs  = require('fs').promises
import { readFile , writeFile} from "fs/promises"

const exec = async () => {
  const  fileContent = await readFile('./teste.txt', {encoding: 'utf8'})

  const list  = fileContent.split('\n')
 
  list.push('fulano')
   const listTxt = list.join('\n')

   await writeFile( './teste.txt', listTxt)
  

  
}


exec()


