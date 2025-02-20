import { connect } from 'mongoose';


export const connectdb = () => {
  connect('mongodb://127.0.0.1:27017/fileSharing')
    .then(() => console.log('mongo connected'))
    .catch((err) => console.log(err));
};


 