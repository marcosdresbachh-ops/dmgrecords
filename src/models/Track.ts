import mongoose, { Schema, models, model } from 'mongoose';

const TrackSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  album: String,
  genre: {
    type: String,
    enum: ['sertanejo', 'gospel', 'pop', 'rock', 'bailao', 'forro', 'romanticas', 'variado', 'pop / r&b', 'pop / rock'],
  },
  duration: String,
  bpm: Number,
  filePath: String,
  coverArtUrl: String,
}, { timestamps: true });

const Track = models.Track || model('Track', TrackSchema);

export default Track;
