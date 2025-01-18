const express = require("express");
const router = express.Router();
const countryController = require("../controllers/countryController");
const authMiddleware = require("../middleware/admin/authMiddleware");
const { checkCandidateToken } = require("../middleware/verifyAuthMiddlware");

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
  authMiddleware,
  addCountryValidation,
  countryController.addCountry
);

router.post(
  "/updateCountry",
  authMiddleware,
  updateCountryValidation,
  countryController.updateCountry
);

router.post(
  "/deleteCountry",
  authMiddleware,
  deleteCountryValidation,
  countryController.deleteCountry
);

router.post(
  "/getCountries",
  checkCandidateToken,
  getCountriesValidation,
  countryController.getCountries
);

// router.post(
//   "/paginateCountries",
//   authMiddleware,
//   paginateCountriesValidation,
//   countryController.paginateCountries
// );

module.exports = router;
