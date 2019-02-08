import client from '../utils/contentful';

const index = (req, res) => res.send('Fetch routes!!!');

const allCategories = async (req, res) => {
    const content = await client.getEntries({ content_type: 'category' });
    res.send(content);
};

export default {
    index,
    allCategories
};
