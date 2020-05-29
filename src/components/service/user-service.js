const axios = require('axios');


const getUsers = payload => {
    return axios({
        method: 'get',
        url: 'https://reqres.in/api/users?page=1'
    });
};

module.exports = { getUsers };