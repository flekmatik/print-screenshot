import {screenshotData} from './screenshot-data';
import {createWriteStream} from 'fs';

const stream = createWriteStream('screenshot.png');
stream.write(new Buffer(screenshotData, 'base64'));
stream.end();
