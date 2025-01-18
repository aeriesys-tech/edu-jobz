// let models = require("../models");
let { CandidateLog } = require("../../models");
const user_jwt = require("../../config/jwtConfig");
let jwt = require("jsonwebtoken");
// let ApiLog = models.api_logs;
let _ = require("underscore");

const logData = async function (status, logData, messsage, responseData) {
  let data = {};
  let ip = logData.headers["x-real-ip"] || logData.socket.remoteAddress;

  if (_.isEmpty(logData.body)) {
    data.body = logData.query;
  } else {
    data.body = logData.body;
  }
  if (logData.headers.authorization) {
    let logCandidates = await getCandidateIdFromToken(logData.headers);

    if (logCandidates && logCandidates.candidate_id) {
      data.candidate_id = logCandidates.candidate_id;
    }
  } else {
    data.candidate_id = null;
  }

  data.apiName = logData.method + ":" + JSON.stringify(logData.originalUrl);
  let saveData = {
    api_name: data.apiName,
    ip_address: "localhost",
    api_request: JSON.stringify(data.body),
    error_message: messsage,
    status: status,
    candidate_id: data.candidate_id,
  };

  //save log
  await CandidateLog.create(saveData);
};

// getting userId from Token
const getCandidateIdFromToken = async (req) => {
  return new Promise(function (resolve, reject) {
    let token = getToken(req);
    if (token) {
      try {
        jwt.verify(token, user_jwt.jwt_constant, async function (err, decoded) {
          if (err) {
            reject(null);
          } else {
            // return users
            resolve(decoded);
          }
        });
      } catch (ex) {
        reject(null);
      }
    } else {
      reject(null);
    }
  }).catch((e) => {
    return null;
  });
};

const getToken = function (headers) {
  if (headers && headers.authorization) {
    let parted = headers.authorization.split(" ");
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = {
  logData,
};
