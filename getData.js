const axios = require("axios");
const getDataofcovid = async () => {
  //Karnataka related data
  const karnataka = await axios(`https://api.covid19india.org/v4/data.json`);
  // console.log(karnataka.data.KA)
  const dailyCount = await karnataka.data.KA.delta.confirmed;
  const bangaloreCount = await karnataka.data.KA.districts["Bengaluru Urban"]
    .delta.confirmed;
  const mangaloreCount = await karnataka.data.KA.districts["Dakshina Kannada"]
    .delta.confirmed;
  const udupiCount = await karnataka.data.KA.districts["Udupi"].delta.confirmed;
  const kodaguCount = await karnataka.data.KA.districts["Kodagu"].delta
    .confirmed;
  const mysoreCount = await karnataka.data.KA.districts["Mysuru"].delta
    .confirmed;
  const shimogaCount = await karnataka.data.KA.districts["Shivamogga"].delta
    .confirmed;

  const kasargodCount = await karnataka.data.KL.districts.Kasaragod.delta
    .confirmed;
  const wayanadCount = await karnataka.data.KL.districts.Wayanad.delta
    .confirmed;

  const mangaloreDeath = await karnataka.data.KA.districts["Dakshina Kannada"]
    .delta.deceased;
  const mysoreDeath = await karnataka.data.KA.districts["Mysuru"].delta
    .deceased;
  const shimogaDeath = await karnataka.data.KA.districts["Shivamogga"].delta
    .deceased;
  const kodaguDeath = await karnataka.data.KA.districts["Kodagu"].delta
    .deceased;

  const karnatakaVaccinations = await karnataka.data.KA.total.vaccinated;
  const keralaVaccinations = await karnataka.data.KL.total.vaccinated;
  const mangaloreVaccinations = await karnataka.data.KA.districts[
    "Dakshina Kannada"
  ].total.vaccinated;

  const totalRecovered = await karnataka.data.KA.total.recovered;
  const totalCases = await karnataka.data.KA.total.confirmed;
  const total = (totalRecovered / totalCases) * 100;

  //India related data

  const india = await axios(`https://api.covid19india.org/data.json`);
  const indiaData = await india.data.cases_time_series;
  const indiaDailyConfirmed = await indiaData[indiaData.length - 1]
    .dailyconfirmed;
  const indiaRecoveryRate =
    ((await indiaData[indiaData.length - 1].totalrecovered) /
      indiaData[indiaData.length - 1].totalconfirmed) *
    100;

  const final = {
    karnatakaCount: dailyCount,
    bangaloreCount,
    mangaloreCount,
    udupiCount,
    kodaguCount,
    mysoreCount,
    shimogaCount,
    kasargodCount,
    wayanadCount,
    mangaloreDeath,
    shimogaDeath,
    mysoreDeath,
    kodaguDeath,
    karnatakaVaccinations,
    keralaVaccinations,
    mangaloreVaccinations,
    bangaloreRecoveryRate: parseFloat(total.toFixed(2)),
    indiaDailyConfirmed: parseFloat(indiaDailyConfirmed),
    indiaRecoveryRate: parseFloat(indiaRecoveryRate.toFixed(2)),
  };
  return final;
};

module.exports = { getDataofcovid };
