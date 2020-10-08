import mongoose from 'mongoose';

mongoose.connect('mongodb://192.168.0.110:27017/microservice', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
