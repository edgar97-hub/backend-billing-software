import PlanInternet from "../models/PlanInternet.js";

export const createPlanInternet = async (req, res) => {
  try {
    const { planType, description, price, mbps } = req.body;
    const planInternet = new PlanInternet({
      planType,
      description,
      price,
      mbps,
    });

    console.log(planType, description, price, mbps);
    await planInternet.save();

    res.status(200).json({ message: true });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getPlansInternet = async (req, res) => {
  try {
    const planInternet = await PlanInternet.find();
    res.status(200).json(planInternet);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// export const getUserPosts = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const post = await Post.find({ userId });
//     res.status(200).json(post);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

export const updatePlanInternet = async (req, res) => {
  try {
    const { _id } = req.body;
    const updatedPlanInternet = await PlanInternet.findByIdAndUpdate(
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

export const removePlanInternet = async (req, res) => {
  try {
    const { _id } = req.body;
    const updatedPlanInternet = await PlanInternet.findByIdAndRemove(_id);

    res.status(200).json({ message: true });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
