import mongoose, { Schema, models, model } from 'mongoose';

const AdvertiserSchema = new Schema({
  name: { type: String, required: true },
  shortName: String,
  plan: {
    type: String,
    enum: ['Básico', 'Standard', 'Premium', 'Premium Plus'],
  },
  expiryDate: Date,
  spots: Number,
  monthlyRevenue: Number,
  status: {
    type: String,
    enum: ['ativo', 'expirando', 'inativo'],
  },
  asaasCustomerId: String,
}, { timestamps: true });

const Advertiser = models.Advertiser || model('Advertiser', AdvertiserSchema);

export default Advertiser;
