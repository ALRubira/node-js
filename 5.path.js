const path = require('node:path')

// Barra separadora de carpetas segun sistema operativo
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('tmp/secret/docs/test.txt')
console.log(base)

const filename = path.basename('tmp/secret/docs/test.txt', '.txt')
console.log(filename)

const extension = path.extname('image.jpg')
console.log(extension)
