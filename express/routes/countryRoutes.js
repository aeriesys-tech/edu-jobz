const express = require("express");
const router = express.Router();
const countryController = require("../controllers/countryController");
const { checkAllTokens } = require("../middleware/verifyAuthMiddlware");
const { checkAdminToken } = require("../middleware/verifyAuthMiddlware");
const {
  addCountryValidation,
  updateCountryValidation,
  deleteCountryValidation,
  getCountriesValidation,
  paginateCountriesValidation,
} = require("../validations/countryValidations");

// Routes for countrys
router.post(
  "/addCountry",
  checkAdminToken,
  addCountryValidation,
  countryController.addCountry
);

router.post(
  "/updateCountry",
  checkAdminToken,
  updateCountryValidation,
  countryController.updateCountry
);

router.post(
  "/deleteCountry",
  checkAdminToken,
  deleteCountryValidation,
  countryController.deleteCountry
);

router.post(
  "/getCountries",
  checkAllTokens,
  getCountriesValidation,
  countryController.getCountries
);

router.post(
  "/paginateCountries",
  checkAllTokens,
  checkAdminToken,
  paginateCountriesValidation,
  countryController.paginateCountries
);

module.exports = router;
