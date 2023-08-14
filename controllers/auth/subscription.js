const { ctrlWrapper } = require("../../helpers");
const { User } = require("../../models/user");

const subscription = async (req, res) => {
  const { id } = req.params;
  const { subscription } = req.body;

  const user = await User.findByIdAndUpdate(
    id,
    { subscription },
    { new: true }
  );
  res.json({
    name: user.name,
    email: user.email,
    subscription: user.subscription,
  });
};

module.exports = {
  subscription: ctrlWrapper(subscription),
};
