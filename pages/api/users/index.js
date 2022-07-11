import connectDB from '../../../server/medllewere/mongodb';
import User from '../../../server/models/User';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;
    if (name && email && password) {
      try {
        var user = new User({
          name,
          email,
          password,
        });
        var usercreated = await user.save();
        return res.status(200).send(usercreated);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      res.status(422).send('data_incomplete');
    }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);
