import DiscordJS, {Intents} from "discord.js";
import WOKCommands from "wokcommands";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ],
})

client.on("ready", () => {
    new WOKCommands(client, {
      commandDir: path.join(__dirname, "commands"),
    });
    console.log("\nThe bot is ready\n");
  });

  client.login(process.env.TOKEN)

let heartbeat = "Heartbeat | Uptime: "
console.log("\nThe bot is connected to Discord\n")
let baseTime = Date.now();
setInterval(() => {
  let time = Date.now();
  console.log(heartbeat.concat(msToTime(time - baseTime)))
}, 7500)

function msToTime(ms: number) {
  let seconds = (ms / 1000).toFixed(1);
  let minutes = (ms / (1000 * 60)).toFixed(1);
  let hours = (ms / (1000 * 60 * 60)).toFixed(1);
  let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
  if (Number(seconds) < 60) return seconds + " Sec";
  else if (Number(minutes) < 60) return minutes + " Min";
  else if (Number(hours) < 24) return hours + " Hrs";
  else return days + " Days"
}