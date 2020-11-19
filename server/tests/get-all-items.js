const axios = require('axios');

// Test for getting items form inventory
axios.get('http://localhost:3000/api/items')
  .then(function (response) {
    console.log(response);
  });