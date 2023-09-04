const mongoose = require('mongoose');

const checkId = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such workout' })
  }

  next();
}

module.exports = {
  checkId,
};