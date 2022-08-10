import connectDB from '../../../server/medllewere/mongodb';
import User from '../../../server/models/User';

const post = async (req, res) => {
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
}

const get = async (req, res) => {
  const { email, password } = req.headers;
  if (email && password) {
    try {
      const user = await User.findOne({ email });
      console.log("User:", user, 'body', req.body)
      if ( user && user.password === password) {
        return res.status(200).send(user);
      } else {
        return res.status(202).send("not_authorized");
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else {
    res.status(422).send('data_incomplete');
  }
}

const handler = async (req, res) => {
  switch (req.method) {
    case 'POST':  post(req, res); break;
    case 'GET': get(req, res); break;
    default:
      res.status(422).send('req_method_not_supported');
      break;
  }
};

export default connectDB(handler);
