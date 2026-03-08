import mongoose, { Schema, models, model } from 'mongoose';

// Schema for the Lojista/Admin user
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Should be hashed
  whatsapp: { type: String, required: true },
  cpf_cnpj: String,
  role: {
    type: String,
    enum: ['lojista', 'admin'],
    default: 'lojista',
  },
  // Asaas Integration
  asaasWalletId: String,
  asaasCustomerId: String,
}, { timestamps: true });

const User = models.User || model('User', UserSchema);

export default User;
