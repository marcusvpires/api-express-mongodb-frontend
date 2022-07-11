import mongoose from 'mongoose';

const connectDB = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  const connectMongo = async () => mongoose.connect(process.env.mongodburl);
  
  console.log('Connecting to MongoDB');
  await connectMongo()
  console.log('MongoDB connected');
  return handler(req, res);
};

export default connectDB