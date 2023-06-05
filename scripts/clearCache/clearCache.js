const fs = require('fs');
const {resolve} = require('path')

const clearCache = () => {
	fs.rm(resolve(__dirname, '..', '..', 'node_modules', '.cache'), {recursive: true}, console.log)
}
clearCache();