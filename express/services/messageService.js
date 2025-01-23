const http = require("http");
const msg = require("../config/msg91.config");
const sendOtp = async (mobile, otp) => {
  return new Promise(async function (resolve, reject) {
    try {
      (async function () {
        var options = {
          method: "GET",
          hostname: "api.msg91.com",
          port: null,
          path:
            "/api/v5/otp?template_id=" +
            msg.temp_id +
            "&mobile=" +
            mobile +
            "&authkey=" +
            msg.authKey +
            "&otp=" +
            otp +
            "",
          headers: {
            "content-type": "application/json",
          },
        };
        var req = http.request(options, function (res) {
          console.log(res);
          var chunks = [];
          res.on("data", function (chunk) {
            chunks.push(chunk);
            console.log("success");
            resolve(1);
          });
          res.on("end", function () {
            var body = Buffer.concat(chunks);
            console.log("body: " + body);
            resolve(1);
          });
        });
        req.end();
      })();
    } catch (Exceptions) {
      reject(0);
    }
  });
};

module.exports = { sendOtp };
