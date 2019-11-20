const mongoose = require("mongoose"),
  schema /*table */ = mongoose.Schema;

const foodorder = new schema({
  id: {
    type: String,
    trim: true,
    default: " "
  },
  email: {
    type: String,
    trim: true,
    default: " "
  },
  title: {
    type: String,
    trim: true,
    default: " "
  },
  expdate: {
    type: String,
    trim: true,
    default: " "
  },

  phone: {
    type: String,
    trim: true,
    default: ""
  },
  loc: {
    type: String,
    trim: true,
    default: " "
  },
  status: {
    type: String,
    trim: true,
    default: ""
  }
});

const blog = mongoose.model("foodords", foodorder);

module.exports = blog;
