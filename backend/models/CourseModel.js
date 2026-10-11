import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },

    fees: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

  },
  {
    timestamps: true,
  }
);

const CourseModel = mongoose.model("courses", CourseSchema);

export default CourseModel;