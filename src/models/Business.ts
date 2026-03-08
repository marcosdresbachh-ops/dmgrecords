import mongoose, { Schema, models, model } from 'mongoose';

const BusinessSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  city: { type: String, required: true },
  neighborhood: String,
  address: { type: String, required: true },
  phone: String,
  whatsapp: String,
  instagram: String,
  hours: String,
  description: String,
  isFeatured: { type: Boolean, default: false },
  icon: String,
  logoUrl: String,
  galleryUrls: [String],
  tags: [String],
  
  // Link to the User who owns this business
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },

  // Status & Plan
  isActive: { type: Boolean, default: false },
  plan: { type: String, enum: ['Básico', 'Destaque Premium'], default: 'Básico' },
  
}, { timestamps: true });

const Business = models.Business || model('Business', BusinessSchema);

export default Business;
