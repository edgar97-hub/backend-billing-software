import mongoose from "mongoose";

const PlanInternetSchema = new mongoose.Schema(
  {
    planType: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    mbps: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {},
  }
);
const PlanInternet = mongoose.model("PlanInternet", PlanInternetSchema);
export default PlanInternet;
