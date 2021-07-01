const axios = require('axios');
(async()=>{
    const karnataka = await axios(`https://api.covid19india.org/v4/data.json`);
    console.log(karnataka.data.KL.delta.confirmed)
    const dailyCount = await karnataka.data.KA.delta.confirmed;
    
})()

