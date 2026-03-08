import mongoose, { Schema, models, model } from 'mongoose';

const NewsSchema = new Schema({
  title: { type: String, required: true },
  category: String,
  content: String,
  status: {
    type: String,
    enum: ['publicado', 'rascunho'],
    default: 'rascunho',
  },
  views: { type: Number, default: 0 },
  imageUrl: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' }, // Link to the user/author
}, { timestamps: true });

const News = models.News || model('News', NewsSchema);

export default News;
