const axios = require("axios");

module.exports = {
  category: "Views",
  description: "Adds views to ebay listing",

  slash: "both",
  callback: ({ message, interaction }) => {
    if (!message.content.startsWith("!addviews")) return;
    const [, number, link] = message.content.split(" ");
    if (isNaN(number)) return "The first argument must be a number!";
    else if (number > 100) return "Please use a number less than 100!";
    console.log(link);
    for (let i = 0; i < number; i++) {
      axios.get(link);
      let now = Date.now(),
        end = now + 50;
      while (now < end) {
        now = Date.now();
      }
    }
    return "Done!";
  },
};
