import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema(
  // { id: "fullName", label: "Nombre completo" },
  // { id: "clientType", label: "Tipo cliente" },
  // { id: "address", label: "Dirección" },
  // { id: "district", label: "Distrito" },
  // { id: "documentType", label: "Tipo documento" },
  // { id: "documentNumber", label: "Numero documento" },
  // { id: "telephone", label: "Telefono" },
  // { id: "email", label: "Correo" },
  // { id: "plan", label: "Plan" },
  // { id: "observations", label: "Observaciones" },
  // { id: "state", label: "Estado" },
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
