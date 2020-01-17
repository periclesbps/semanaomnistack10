const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/devs', async (request, response) => {
    //console.log(request.body);
    const { github_username } = request.body;

    const resp = await axios.get(`https://api.github.com/users/${github_username}`);
    console.log(resp.data);

    return response.json({ message: 'Helo World' });
});

module.exports = routes;