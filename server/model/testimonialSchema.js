const mongoose = require("mongoose");
const testimonialSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    post: {
      type: String,
      require: true,
    },
    disc: {
      type: String,
      require: true,
    },
    cDate: {
      type: String,
    },
    upDate: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  { versionKey: false }
);

const Testimonial = mongoose.model('testimonial',testimonialSchema);
module.exports = Testimonial;