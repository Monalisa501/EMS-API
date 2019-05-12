import mongoose from 'mongoose';

import User from './user';
import Message from './message';
import Employee from './employee';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { User, Message, Employee };

export { connectDb };

export default models;
