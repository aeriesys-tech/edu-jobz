const express = require("express");
const router = express.Router();
const cityController = require("../controllers/cityController");
const { checkAllTokens } = require("../middleware/verifyAuthMiddlware");
const { checkAdminToken } = require("../middleware/verifyAuthMiddlware");
const {
  addCityValidation,
  updateCityValidation,
  deleteCityValidation,
  getCitiesValidation,
  paginateCitiesValidation,
} = require("../validations/cityValidations");

// Routes for states
router.post(
  "/addCity",
  checkAdminToken,
  addCityValidation,
  cityController.addCity
);

router.post(
  "/updateCity",
  checkAdminToken,
  updateCityValidation,
  cityController.updateCity
);

router.post(
  "/deleteCity",
  checkAdminToken,
  deleteCityValidation,
  cityController.deleteCity
);

router.post(
  "/getCities",
  checkAllTokens,
  getCitiesValidation,
  cityController.getCities
);

router.post(
  "/paginateCities",
  checkAllTokens,
  checkAdminToken,
  paginateCitiesValidation,
  cityController.paginateCities
);

module.exports = router;
