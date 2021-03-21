const os = require('os');

console.log('CPUs: ', os.cpus());
console.log('Total Memory: ', os.totalmem());
console.log('Available Memory: ', os.freemem());
console.log('Load: ', os.loadavg());
console.log('Hostname: ', os.hostname());
console.log('Home Directory: ', os.homedir());
console.log('Platform: ', os.platform());
console.log('Uptime: ', os.uptime());