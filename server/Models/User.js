const mongoose = require('mongoose');
const schema = mongoose.Schema;
const UserSchema = new schema({
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    height: {
      type: Number, // in cm
      required: false,
    },

    weight: {
      type: Number, // in kg
      required: false,
    },

    age: {
      type: Number,
      required: true,
    },

    goal: {
      type: String,
      enum: ['Muscle gain', 'Fat loss'],
      required: false,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  },
);

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;
