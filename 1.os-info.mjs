import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Informacion del Sistema Operativo')
console.log('---------------------------------')

console.log('Nombre del Sistema Operativo', platform())
console.log('Versión del Sistema Operativo', release())
console.log('Arquitectura del Sistema Operativo', arch())
console.log('CPUs', cpus())
console.log('Memoria libre', freemem() / 1024 / 1024)
console.log('Memoria libre', totalmem() / 1024 / 1024)
console.log('uptime', uptime() / 60 / 60)
