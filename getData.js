const axios = require("axios");
const getDataofcovid = async () => {
  //Karnataka related data
  const karnataka = await axios(`https://api.covid19india.org/v4/data.json`);
  const dailyCount = await karnataka.data.KA.delta.confirmed;
  const bangaloreCount = await karnataka.data.KA.districts["Bengaluru Urban"]
    .delta.confirmed;
  const mangaloreCount = await karnataka.data.KA.districts["Dakshina Kannada"]
    .delta.confirmed;
  const udupiCount = await karnataka.data.KA.districts["Udupi"].delta.confirmed;
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
    bangaloreRecoveryRate: total.toFixed(2),
    indiaDailyConfirmed,
    indiaRecoveryRate: indiaRecoveryRate.toFixed(2),
  };
  console.log(final);
  return final;
};

module.exports = { getDataofcovid };
