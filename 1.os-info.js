const os = require('node:os')

console.log('Informacion del Sistema Operativo')
console.log('---------------------------------')

console.log('Nombre del Sistema Operativo', os.platform())
console.log('Versión del Sistema Operativo', os.release())
console.log('Arquitectura del Sistema Operativo', os.arch())
console.log('CPUs', os.cpus())
console.log('Memoria libre', os.freemem() / 1024 / 1024)
console.log('Memoria libre', os.totalmem() / 1024 / 1024)
console.log('uptime', os.uptime() / 60 / 60)
