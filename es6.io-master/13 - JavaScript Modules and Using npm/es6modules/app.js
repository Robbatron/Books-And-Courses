// need to put curly brackets around named exports!!! (export on same line)
import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
// how do we get apiKey from config.js? we import it!
import { apiKey as key, url, sayHi } from './src/config';
// how do we import a default?
import User, {createURL, gravatar } from './src/user'

const user = new User('Robbie Delfs', 'robbie@gmail.com', 'robbiedelfs.codes')
console.log(user);

const profile = createURL(user.name)
console.log(profile)

const image = gravatar(user.email);
console.log(image);