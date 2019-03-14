import client from '../utils/contentful';

const index = (req, res) => res.send('Fetch routes!!!');

const getHomepage = async (req, res) => {
    const content = await client.getEntries({ content_type: 'homepage' });
    res.send(content);
};


export default {
    index,
    getHomepage,
};
