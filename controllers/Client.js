import Client from "../models/Client.js";

export const createClient = async (req, res) => {
  try {
    const {
      fullName,
      clientType,
      address,
      district,
      startDate,
      documentType,
      documentNumber,
      telephone,
      email,
      plan,
      observations,
      state,
    } = req.body;
    const client = new Client({
      fullName,
      clientType,
      address,
      district,
      startDate,
      documentType,
      documentNumber,
      telephone,
      email,
      plan,
      observations,
      state,
    });

    //console.log(planType, description, price, mbps);
    await client.save();

    res.status(200).json({ message: true });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const bulkInsertion = async (req, res) => {
  try {
    // const {
    //   fullName,
    //   clientType,
    //   address,
    //   district,
    //   startDate,
    //   documentType,
    //   documentNumber,
    //   telephone,
    //   email,
    //   plan,
    //   observations,
    //   state,
    // } = req.body;
    // const client = new Client({
    //   fullName,
    //   clientType,
    //   address,
    //   district,
    //   startDate,
    //   documentType,
    //   documentNumber,
    //   telephone,
    //   email,
    //   plan,
    //   observations,
    //   state,
    // });

    //console.log(planType, description, price, mbps);
    // await client.save();
    console.log(req.body);
    // const docs = [
    //   { name: "cake", healthy: false },
    //   { name: "lettuce", healthy: true },
    //   { name: "donut", healthy: false }
    // ];
    const options = { ordered: true };
    const result = await Client.insertMany(req.body, options);

    res.status(200).json({ message: true });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getClients = async (req, res) => {
  try {
    const Clients = await Client.find();
    res.status(200).json(Clients);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const updateClient = async (req, res) => {
  try {
    const { _id } = req.body;
    await Client.findByIdAndUpdate(
      _id,
      req.body,
      // { $set: },
      // { planType: planType },
      // { description: description },
      // { price: price },
      // { mbps: mbps },
      { new: true }
    );

    res.status(200).json({ message: true });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const removeClient = async (req, res) => {
  try {
    const { _id } = req.body;
    await Client.findByIdAndRemove(_id);

    res.status(200).json({ message: true });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
