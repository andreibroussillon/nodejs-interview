exports.sayHello = (req, res) => {
    const name = req.query.name || 'unknown';
    res.send(`Hello ${name} !`);
  };