const express = require('express');
const router = express.Router();

const PhoneItem = require('../Schema/phoneSchema');

router.post('/phone', async (req, res) => {

  try {
    console.log('Received product data:', req.body);
    const newItem = new PhoneItem(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

router.get('/phone', async (req, res) => {
  try {
    const phones = await PhoneItem.find({});
    res.json(phones);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/phone/:id', async (req, res) => {
  const phoneId = req.params.id;

  try {
    const phone = await PhoneItem.findById(phoneId);

    if (!phone) {
      return res.status(404).json({ message: 'Phone not found' });
    }

    res.json(phone);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/phone/:id', async (req, res) => {
  try {
    const phoneId = req.params.id;
    await PhoneItem.findByIdAndRemove(phoneId);
    res.json({ message: 'Phone successfully deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/phone/:id', async (req, res) => {
  const phoneId = req.params.id;
  const updatedPhone = req.body;

  try {
    const phone = await PhoneItem.findByIdAndUpdate(phoneId, updatedPhone, { new: true });

    if (!phone) {
      return res.status(404).json({ error: 'Phone not found' });
    }

    return res.json(phone);
  } catch (error) {
    console.error('Error in phone update data:', error);
    return res.status(500).json({ error: 'Error in phone update data' });
  }
});


module.exports = router;