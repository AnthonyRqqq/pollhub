const { Schema, model } = require("mongoose");

const pollSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  options: [
    {
      name: { type: String },
      required: true,
    },
  ],
  expiration: {
    type: Date,
  },
});

const Poll = model('Poll', pollSchema)
