const express = require("express");
const router = express.Router();
const stateController = require("../controllers/stateController");
const { checkAllTokens } = require("../middleware/verifyAuthMiddlware");
const { checkAdminToken } = require("../middleware/verifyAuthMiddlware");
const {
  addStateValidation,
  updateStateValidation,
  deleteStateValidation,
  getStatesValidation,
  paginateStatesValidation,
} = require("../validations/stateValidations");

// Routes for states
router.post(
  "/addState",
  checkAdminToken,
  addStateValidation,
  stateController.addState
);

router.post(
  "/updateState",
  checkAdminToken,
  updateStateValidation,
  stateController.updateState
);

router.post(
  "/deleteState",
  checkAdminToken,
  deleteStateValidation,
  stateController.deleteState
);

router.post(
  "/getStates",
  checkAllTokens,
  getStatesValidation,
  stateController.getStates
);

router.post(
  "/paginateStates",
  checkAllTokens,
  checkAdminToken,
  paginateStatesValidation,
  stateController.paginateStates
);

module.exports = router;
