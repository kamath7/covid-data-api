const axios = require('axios');
(async()=>{
    const karnataka = await axios(`https://api.covid19india.org/v4/data.json`);
    // console.log(karnataka.data.KA)
    const karnatakaVaccinations = await karnataka.data.KA.total.vaccinated
    const keralaVaccinations = await karnataka.data.KL.total.vaccinated
    const mangaloreVaccinations = await karnataka.data.KA.districts['Dakshina Kannada'].total.vaccinated
})()