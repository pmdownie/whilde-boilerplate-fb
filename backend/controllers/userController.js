import User from '../models/User';

const add = (req, res) => res.render('createUser');

const create = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send(`${user.firstname} created in db`).status(200);
};

export default {
    add,
    create
};
