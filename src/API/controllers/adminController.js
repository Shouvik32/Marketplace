const Campaign = require('../../models/Campaign');
const Offer = require('../../models/Offer');
const CrossSell = require('../../models/CrossSell');
const UpSell = require('../../models/UpSell');

exports.createCampaign = async (req, res) => {
  const { name, description, startDate, endDate } = req.body;
  try {
    const campaign = await Campaign.create({ name, description, startDate, endDate });
    res.status(201).json(campaign);
  } catch (err) {
    res.status(500).json({ message: 'Error creating campaign' });
  }
};

exports.createOffer = async (req, res) => {
  const { name, description, discountPercentage, services } = req.body;
  try {
    const offer = await Offer.create({ name, description, discountPercentage, services });
    res.status(201).json(offer);
  } catch (err) {
    res.status(500).json({ message: 'Error creating offer' });
  }
};
exports.addServicesToOffer = async (req, res) => {
  const { offerId, serviceIds } = req.body;
  try {
    const offer = await Offer.findByIdAndUpdate(offerId, { $addToSet: { services: { $each: serviceIds } } }, { new: true });
    if (!offer) return res.status(404).json({ message: 'Offer not found' });
    res.json(offer);
  } catch (err) {
    res.status(500).json({ message: 'Error adding services to offer' });
  }
};

exports.addOfferToCampaign = async (req, res) => {
  const { campaignId, offerId } = req.body;
  try {
    const campaign = await Campaign.findById(campaignId);
    if (!campaign) return res.status(404).json({ message: 'Campaign not found' }); 
    campaign.offers.push(offerId); 
    await campaign.save();
    res.json(campaign);
  } catch (err) {
    res.status(500).json({ message: 'Error adding offer to campaign' });
  }
};

exports.createCrossSell = async (req, res) => {
  const { service_id, cross_sell_id } = req.body;
  try {
    const crossSell = await CrossSell.create({ service_id, cross_sell_id });
    res.status(201).json(crossSell);
  } catch (err) {
    res.status(500).json({ message: 'Error creating cross-sell' });
  }
};


exports.createUpSell = async (req, res) => {
  const { service_id, up_sell_id } = req.body;
  try {
    const upSell = await UpSell.create({ service_id, up_sell_id });
    res.status(201).json(upSell);
  } catch (err) {
    res.status(500).json({ message: 'Error creating up-sell' });
  }
};