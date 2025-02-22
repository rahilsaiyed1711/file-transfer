import { connect } from 'mongoose';


export const connectdb = () => {
  if (!process.env.MONGO_URL) {
    throw new Error('MONGO_URL environment variable is not defined');
  }
  connect(process.env.MONGO_URL)
    .then(() => console.log('mongo connected'))
    .catch((err) => console.log(err));
};

 
