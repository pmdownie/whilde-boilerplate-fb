import * as contentful from 'contentful';
import config from '../config';
const { space, accessToken } = config.content;

const client = contentful.createClient({
    space,
    accessToken
});

export default client;
