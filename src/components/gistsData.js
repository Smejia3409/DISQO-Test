// const { Octokit } = require("@octokit/core");

// //my token
// const token = "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";

// //github api library
// const octokit = new Octokit({
//   //   auth: token,
// });

// let gistStartTime;

// //my current time
// const currentTime = new Date().toLocaleString("en", {
//   hour: "numeric",
//   hour12: false,
//   timeStyle: "medium",
// });

// //turns gist time to EST time
// const shortTime = (time) => {
//   return new Date(time).toLocaleTimeString("en", {
//     timeStyle: "medium",
//     hour12: false,
//     timeZone: "EST",
//   });
// };

// let allTimeStamps = [];
// let dataPoint = [];

// let add = 0;

// // async function data() {
// //   let ts = [];

// //   try {
// //     const response = await octokit.request(
// //       "GET /gists/public?page=1&per_page=100"
// //     );

// //     const size = response.data.length;
// //     const data = response.data;

// //     //Start time of first gist in the list
// //     gistStartTime = shortTime(data[size - 1]["created_at"]).toString();
// //     let t = new Date(`2022-01-01 ${gistStartTime}`);

// //     //when mins go over 60 substract 60 to represent new min

// //     // prints out all created at timestamps
// //     for (let i = 0; i < size; i++) {
// //       let eachGistTime = shortTime(data[i]["created_at"]);
// //       //gist time in date format
// //       let gt = new Date(`2022-01-01 ${eachGistTime}`).getMinutes();
// //       ts.push(gt);
// //     }
// //     return ts;
// //   } catch (error) {
// //     console.log("There is error");
// //     console.log(error);
// //     return null;
// //   }
// // }

// const data = async () => {
//   let ts = [];

//   try {
//     const response = await octokit.request(
//       "GET /gists/public?page=1&per_page=100"
//     );

//     const size = response.data.length;
//     const data = response.data;

//     //Start time of first gist in the list
//     gistStartTime = shortTime(data[size - 1]["created_at"]).toString();
//     let t = new Date(`2022-01-01 ${gistStartTime}`);

//     //when mins go over 60 substract 60 to represent new min

//     // prints out all created at timestamps
//     for (let i = 0; i < size; i++) {
//       let eachGistTime = shortTime(data[i]["created_at"]);
//       //gist time in date format
//       let gt = new Date(`2022-01-01 ${eachGistTime}`).getMinutes();
//       ts.push(gt);
//     }
//     return ts;
//   } catch (error) {
//     console.log("There is error");
//     console.log(error);
//     return null;
//   }
// };

// // console.log(`This are all time stamps: ${}`);

// const rs = data();
// rs.then((e) => {
//   let tsData = [];

//   // start of timestamps list
//   let st = e[99];
//   // add 5 mins to start
//   // let addMin = st + 5;
//   //    if (addMin > 60) {
//   //      addMin -= 60;
//   //    }

//   for (let i = 0; i < e.length; i++) {
//     for (let t = 0; t < 8; t++) {
//       // new time adding 5 mintues
//       let newTime = st + 5 * t;

//       //if the new time goes over 60 it subtracts 60 to make it to minutes
//       if (newTime > 60) {
//         newTime -= 60;
//       }

//       if (e[i] === newTime) {
//         console.log(e[i]);
//         const time = {
//           timeStamp: newTime.toString(),
//           count: 0,
//         };

//         if (!tsData[i]) {
//           tsData.push(time);
//         }
//       }
//     }
//   }

//   console.log(e);
//   console.log(tsData);
// });

// console.log(`This is from outside ${allTimeStamps}`);
// console.log(currentTime.setSeconds(currentTime.getSeconds() + 10));
