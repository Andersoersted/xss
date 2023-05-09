module.exports = (req, res) => {
  const { input } = req.body;
  res.status(200).send(`You submitted: ${input}`);
};
