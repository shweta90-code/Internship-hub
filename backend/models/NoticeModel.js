import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema(
  {
    noticeContent: {
      type: String,
      required: true,
      trim: true
    },

    noticeDate: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

const Notice = mongoose.model("Notice", noticeSchema);

export default Notice;  