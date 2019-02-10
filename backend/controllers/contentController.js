import client from '../utils/contentful';

const index = (req, res) => res.send('Fetch routes!!!');

const getHomepage = async (req, res) => {
    const content = await client.getEntries({ content_type: 'homepage' });
    res.send(content);
};

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
    getHomepage,
    getAbout,
    getAllCategories,
    getCategory
};
