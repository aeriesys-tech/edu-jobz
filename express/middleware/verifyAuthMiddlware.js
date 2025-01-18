// const { user } = require("../config/database.config");
let {
  Admin,
  AdminToken,
  Candidate,
  CandidateToken,
  Employer,
  EmployerToken,
} = require("../models");
const user_jwt = require("../config/jwtConfig");
let jwt = require("jsonwebtoken");

let commonMessage = require("../services/commonMessageService");

let commonResponse = require("../services/commonResponseService");

const { Op } = require("sequelize");
let moment = require("moment");
const util = require("util");
const jwtVerify = util.promisify(jwt.verify); // Promisify jwt.verify

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

const candidateToken = async (req, res, next) => {
  let token = getToken(req.headers);
  if (!token) {
    return null;
  }

  try {
    let decoded = await jwtVerify(token, user_jwt.jwt_constant);
    if (!decoded) {
      return null;
    }
    if (decoded.candidate_id) {
      let candidate = await Candidate.findOne({
        where: {
          candidate_id: decoded.candidate_id,
        },
      });

      let candidate_token = await CandidateToken.findOne({
        where: {
          candidate_id: decoded.candidate_id,
          token: token,
        },
      });

      if (candidate && candidate_token) {
        req.candidate_id = decoded.candidate;
        return decoded.candidate_id;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
};

const employerToken = async (req, res, next) => {
  let token = getToken(req.headers);
  if (!token) {
    return null;
  }

  try {
    let decoded = await jwtVerify(token, user_jwt.jwt_constant);
    if (!decoded) {
      return null;
    }
    if (decoded.employer_id) {
      let employer = await Employer.findOne({
        where: {
          employer_id: decoded.employer_id,
        },
      });

      let employer_token = await EmployerToken.findOne({
        where: {
          employer_id: decoded.employer_id,
          token: token,
        },
      });

      if (employer && employer_token) {
        req.employer_id = decoded.employer;
        return decoded.employer_id;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
};

const adminToken = async (req, res, next) => {
  let token = getToken(req.headers);
  if (!token) {
    return null;
  }

  try {
    let decoded = await jwtVerify(token, user_jwt.jwt_constant);
    if (!decoded) {
      return null;
    }
    if (decoded.admin_id) {
      let admin = await Admin.findOne({
        where: {
          admin_id: decoded.admin_id,
        },
      });

      let admin_token = await AdminToken.findOne({
        where: {
          admin_id: decoded.admin_id,
          token: token,
        },
      });

      if (admin && admin_token) {
        req.admin_id = decoded.admin;
        return decoded.admin_id;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
};

const checkCandidateToken = async (req, res, next) => {
  const candidateTokenResult = await candidateToken(req, res, next);
  req.token_type = {
    type: "candidate",
  };
  if (candidateTokenResult) {
    return next();
  } else {
    req.token_type = {
      type: "candidate",
    };
    return res.json(
      await commonResponse.responseToken(500, false, "Invalid token", null)
    );
  }
};

const checkEmployerToken = async (req, res, next) => {
  const employerTokenResult = await employerToken(req, res, next);
  req.token_type = {
    type: "employer",
  };
  if (employerTokenResult) {
    return next();
  } else {
    return res.json(
      await commonResponse.responseToken(500, false, "Invalid token", null)
    );
  }
};

const checkAdminToken = async (req, res, next) => {
  const adminTokenResult = await adminToken(req, res, next);
  req.token_type = {
    type: "admin",
  };
  if (adminTokenResult) {
    return next();
  } else {
    return res.json(
      await commonResponse.responseToken(500, false, "Invalid token", null)
    );
  }
};

const checkAllTokens = async (req, res, next) => {
  const employerTokenResult = await employerToken(req, res, next);
  const candidateTokenResult = await candidateToken(req, res, next);
  const adminTokenResult = await adminToken(req, res, next);
  if (candidateTokenResult) {
    req.token_type = {
      type: "candidate",
    };
    return next();
  } else if (employerTokenResult) {
    req.token_type = {
      type: "employer",
    };
    return next();
  } else if (adminTokenResult) {
    req.token_type = {
      type: "admin",
    };
    return next();
  } else {
    return res.json(
      await commonResponse.responseToken(500, false, "Invalid token", null)
    );
  }
};

module.exports = {
  getToken,
  candidateToken,
  employerToken,
  adminToken,
  checkCandidateToken,
  checkAllTokens,
  checkEmployerToken,
  checkAdminToken,
};
