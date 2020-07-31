import mongoose from 'mongoose';

export const connect = () => mongoose.connect('mongodb://localhost/music_api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
