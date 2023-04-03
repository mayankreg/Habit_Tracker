// reders values for home page
module.exports.home = (req, res) => {
  return res.render('home', {
    title: 'Homepage',
  });
};
