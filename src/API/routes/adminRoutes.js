const express = require('express');
const {
  createCampaign,
  createOffer,
  addServicesToOffer,
  addOfferToCampaign,
  createCrossSell,
  createUpSell,
} = require('../controllers/adminController'); 
const router = express.Router();


router.post('/campaign', createCampaign);
router.post('/offer', createOffer);
router.post('/offer/add-services', addServicesToOffer);
router.post('/campaign/add-offer', addOfferToCampaign);
router.post('/cross-sell', createCrossSell);
router.post('/up-sell', createUpSell);

module.exports = router;