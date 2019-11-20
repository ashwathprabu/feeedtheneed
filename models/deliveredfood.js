const mongoose = require("mongoose"),
  schema /*table */ = mongoose.Schema;

const delivered = new schema(
  {
    email: {
      type: String,
      trim: true,
      default: " "
    },
    loc: {
      type: String,
      trim: true,
      default: " "
    },
    phone: {
      type: String,
      trim: true,
      default: " "
    },

    title: {
      type: String,
      trim: true,
      default: ""
    }
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  }
);

const fooddls = mongoose.model("fooddlrs", delivered);
module.exports = fooddls;
