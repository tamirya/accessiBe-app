const axios = require('axios');

module.exports = {
  // get user by email
  getUser(email) {
    return axios
      .get(`http://localhost:3000/api/users/${email}`)
      .then(res => res.data)
      .catch(error => console.log(error));
  }
};