const { CandidateLog } = require("../models");

const sendResponse = async (
  res,
  statusCode,
  success,
  message,
  data = null,
  errors = null
) => {
  const response = {
    success,
    message,
  };

  if (data !== null) response.data = data;
  if (errors !== null) response.errors = errors;

  // Get API log details

  //   const candidatelog = {
  //     candidate_id: res.locals.candidate
  //       ? res.locals.candidate.candidate_id
  //       : null, // Retrieve user ID from res.locals
  //     api_name: res.req.originalUrl, // API endpoint
  //     api_request: JSON.stringify(res.req.body), // Request payload
  //     status: statusCode,
  //     ip_address: res.req.ip, // Client IP address
  //     message: message,
  //     api_response: JSON.stringify(response),
  //   };

  try {
    // Store the log in the database
    // await CandidateLog.create(candidatelog);
    await CandidateLog.create({
      // candidate_id: res.locals.candidate
      //   ? res.locals.candidate.candidate_id
      //   : null, // Retrieve user ID from res.locals
      candidate_id: 1,
      api_name: res.req.originalUrl, // API endpoint
      api_request: JSON.stringify(res.req.body), // Request payload
      status: statusCode,
      ip_address: res.req.ip, // Client IP address
      message: message,
      api_response: JSON.stringify(response),
    });
  } catch (error) {
    console.error("Failed to log API request:", error);
  }

  res.status(statusCode).json(response);
};

module.exports = {
  sendResponse,
};
