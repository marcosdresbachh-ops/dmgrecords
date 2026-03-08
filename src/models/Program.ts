import mongoose, { Schema, models, model } from 'mongoose';

const ProgramSchema = new Schema({
  day: {
    type: String,
    enum: ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'],
    required: true,
  },
  time: { type: String, required: true },
  show: { type: String, required: true },
  host: { type: String, required: true },
  genre: { type: String, required: true },
  type: {
    type: String,
    enum: ['Ao Vivo', 'Auto'],
    required: true,
  },
}, { timestamps: true });

const Program = models.Program || model('Program', ProgramSchema);

export default Program;
