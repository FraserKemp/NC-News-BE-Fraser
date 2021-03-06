exports.routeNotFound = (req, res) => {
  res.status(404).send({ msg: 'Route Not Found' });
};

exports.methodNotAllowed = (req, res, next) => {
  res.status(405).send({ msg: 'Method Not Allowed' });
};

exports.sqlErrors = (err, req, res, next) => {
  const codes = {
    '22P02': 'Invalid input syntax for interger',
    '42703': 'Column does not exist',
    '22001': 'body value too long'
  };
  if (codes[err.code]) {
    res.status(400).send({ msg: codes[err.code] });
  } else next(err);
};

exports.handle400 = (err, req, res, next) => {
  const codes = {
    '23502': 'Incorrect Format',
    400: 'Bad request!',
    42703: 'Column does not exist'
  };
  if (codes[err.code]) {
    res.status(400).send({ msg: err.msg || codes[err.code] });
  } else next(err);
};

exports.handle404 = (err, req, res, next) => {
  const codes = {
    '23503': 'Id does not exist',
    404: 'Id does not exist'
  };
  if (codes[err.code]) {
    res.status(404).send({ msg: err.msg || codes[err.code] });
  } else next(err);
};

exports.handle500 = (err, req, res, next) => {
  res.status(500).send({ msg: 'Internal Server Error' });
};
