import fs from 'fs';
import {resolve} from 'path';

const clearCache = () => {
	fs.rm(resolve(__dirname, '..', '..', 'node_modules', '.cache'))
}

clearCache();