import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema(
   
  {
    fullName: {
      type: String,
      required: false,
    },
    clientType: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    district: {
      type: String,
      required: false,
    },
    startDate: {
      type: String,
      required: false,
    },
    documentType: {
      type: String,
      required: false,
    },
    documentNumber: {
      type: String,
      required: false,
    },
    telephone: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    plan: {
      type: String,
      required: false,
    },
    observations: {
      type: String,
      required: false,
    },
    state: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: {},
  }
);

const Client = mongoose.model("Client", ClientSchema);
export default Client;
