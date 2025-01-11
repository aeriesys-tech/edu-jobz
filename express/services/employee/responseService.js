// const { AdminLog } = require("../models");
const { EmployeeLog } = require("../../models");
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

  // Prepare the API log details
  const employeeApiLog = {
    employee_id: res.locals.admin ? res.locals.employee.id : null, // Retrieve admin ID from locals
    api_name: res.req.originalUrl, // API endpoint
    api_request: JSON.stringify(res.req.body), // Request payload
    status: statusCode,
    ip_address: res.req.ip, // Client IP address
    message: message,
    api_response: JSON.stringify(response), // Response body
  };

  try {
    // Store the log in the database
    if (EmployeeLog && typeof EmployeeLog.create === "function") {
      await EmployeeLog.create(employeeApiLog);
    } else {
      console.warn("EmployeeLog model is not defined or not initialized.");
    }
  } catch (error) {
    console.error("Failed to log API request:", error.message || error);
  }

  // Send response
  res.status(statusCode).json(response);
};

module.exports = {
  sendResponse,
};
