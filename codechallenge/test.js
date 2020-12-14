
const fetch = require('node-fetch');

(async () => {

    const response = await fetch('https://github.com/', {METHOD: 'GET', headers: {'Content-Type': 'application/json'}});

    const body = await response.text();

    console.log(body);
})();
