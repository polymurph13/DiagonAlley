const express = require('express');
const router = express.Router();
const ShopModel = require('../models/Shop.model');
const UserModel = require('../models/User.model');

//acceptance letter
router.get('/accept', (req, res) => {
  if(!req.session.loggedInUser) {
    res.render('auth/login.hbs', {layout: false});
  } else {
    res.render('users/accept.hbs', {userData: req.session.loggedInUser});
  }
});

//profile
router.get('/profile', (req, res) => {
  if(!req.session.loggedInUser) {
    res.render('auth/home.hbs', {layout: false});
  } else {

    UserModel.findById(req.session.loggedInUser._id)
    .populate('ownedItems')
    .then((items) => {
      const user = req.session.loggedInUser;

      let sortedItems = items.ownedItems.reduce((collection, object) => {
        let itemType = object.itemType[0].toUpperCase() + object.itemType.substring(1) + 's';
        if(collection[itemType]) {collection[itemType].push(object);}
        else {
          collection[itemType] = [];
          collection[itemType].push(object);
        }
        return collection;
      }, {});

      res.render('users/profile.hbs', {sortedItems, user});
    })
    .catch(() => {
      console.log('something went wrong');
    });
  }
});

//deleting things from profile
router.post('/profile/:itemId/delete', (req, res, next) => {
  if(!req.session.loggedInUser) {
    res.render('auth/login.hbs', {layout: false});
  } else {
  const userId = req.session.loggedInUser._id;
  const itemId = req.params.itemId;
  UserModel.updateOne({_id: userId}, {$pullAll: {ownedItems: [{_id: req.params.itemId}]}})
  .then(() => {
    ShopModel.updateOne({_id: itemId}, {$pullAll: {owners: [{_id: userId}]}})
    .then(() => {
      console.log('deleted');
      res.redirect(`/profile`);
    })
    .catch(() => {
      console.log('failed to remove owner from object');
      res.redirect(`/profile`);
    });
  })
  .catch((r) => {
    console.log('failed to remove item from profile', r);
    res.redirect(`/profile`);
  });
}
});

module.exports = router;