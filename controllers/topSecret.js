const { response } = require('express');

const topSecret = (req, res = response) => {
  const { satellites } = req.body;
  let message = '';
  const result = [];
  try {
    satellites.forEach((satellite, index) => {
      satellite.message.forEach((message, ind) => {
        if (message !== '') {
          result[ind] = message;
        }
      });
    });

    message = result.join(' ');

    if (message === '') {
      res.status(404).json({
        message: 'No se pudo determinar el mensaje',
      });
    }

    res.status(200).json({
      message: message,
    });
  } catch (error) {
    res.status(404).json({
      message: 'No se puede determinar el mensaje',
    });
  }
};

module.exports = {
  topSecret,
};
