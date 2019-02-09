import client from '../utils/contentful';

const index = (req, res) => res.send('Fetch routes!!!');

const getAbout = async (req, res) => {
    const content = await client.getEntries({ content_type: 'about' });
    res.send(content);
};

const getAllCategories = async (req, res) => {
    const content = await client.getEntries({ content_type: 'category' });
    res.send(content);
};

const getCategory = async (req, res) => {
    const content = await client.getEntries({
        include: 2,
        'fields.id': req.params.id,
        content_type: 'category'
    });
    res.send(content);
};

export default {
    index,
    getAbout,
    getAllCategories,
    getCategory
};
