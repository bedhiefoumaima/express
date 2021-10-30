let auth = (req, res, next) => {
    const d = new Date();
    let n = d.getDay();
    let h = d.getHours();
  
    if (n >= 1 && n <= 5 && h >= 9 && h <= 12) {
      next();
    } else {
      res.send("<h1>BACK TOMORROW</h1>");
    }
  };
  
  module.exports = auth;