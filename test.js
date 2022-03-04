var axios = require("axios").default;

var options = {
  method: "GET",
  url: "https://pokemon-tcg-card-prices.p.rapidapi.com/card",
  params: { name: "Suicune GX" },
  headers: {
    "x-rapidapi-host": "pokemon-tcg-card-prices.p.rapidapi.com",
    "x-rapidapi-key": "d15910c317msh0f3e6168294b940p19cbcbjsn99967d1c1e53",
  },
};

axios
  .request(options)
  .then(function (response) {
    let data = response.data;
    if (data.results[0])
      for (let i = 0; i < data.results.length; i++) {
        console.log("\nMatch " + i + ": \n");
        console.log(data.results[i]);
      }
    //console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
