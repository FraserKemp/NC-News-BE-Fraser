const connection = require('../db/connection');

const fetchUserByUsername = username => {
  return connection
    .select('*')
    .from('users')
    .where('users.username', '=', username)
    .returning('*');
};

module.exports = { fetchUserByUsername };