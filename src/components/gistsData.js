const { Octokit } = require("@octokit/core");

//my token
const token = "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";

//github api library
const octokit = new Octokit({
  auth: token,
});

let gistStartTime;

//my current time
const currentTime = new Date().toLocaleString("en", {
  hour: "numeric",
  hour12: false,
  timeStyle: "medium",
});

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

const todayDate = year + "-" + month + "-" + day;
//turns gist time to EST time
const shortTime = (time) => {
  return new Date(time).toLocaleTimeString("en", {
    timeStyle: "medium",
    hour12: false,
    timeZone: "EST",
  });
};

async function data() {
  try {
    const response = await octokit.request(
      "GET /gists/public?page=1&per_page=100"
    );
    const size = response.data.length;
    const data = response.data;

    //Start time
    gistStartTime = shortTime(data[size - 1]["created_at"]).toString();
    let t = new Date(`2022-01-01 ${gistStartTime}`);

    let addMin = `${t.getMinutes() + 5} `;

    if (addMin > 60) {
      addMin -= 60;
    }

    console.log(`This is start time: ${t.getMinutes()}`);
    for (let i = 0; i < size; i++) {
      let eachGistTime = shortTime(data[i]["created_at"]);
      //gist time in date format
      let gt = new Date(`2022-01-01 ${eachGistTime}`);

      console.log(gt.getMinutes());
    }
  } catch (error) {
    console.log("There is error");
    console.log(error);
  }
}

data();

// console.log(currentTime.setSeconds(currentTime.getSeconds() + 10));
