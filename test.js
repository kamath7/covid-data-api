const axios = require('axios');
(async()=>{
    const karnataka = await axios(`https://api.covid19india.org/v4/data.json`);
    // console.log(karnataka.data.KA)
    const kodaguDeath = await karnataka.data.KA.districts["Kodagu"]
    .delta.deceased;
    console.log(kodaguDeath)
})()