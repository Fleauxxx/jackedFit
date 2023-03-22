const db = require('../config/connection');
const { User, Review, Trainer, Product } = require('../models');
const userSeeds = require('./userSeeds.json');
const reviewSeeds = require('./reviewSeeds.json');
const trainerSeeds = require('./trainerSeeds.json');
const productSeeds = require('./productSeeds.json');

db.once('open', async () => {
  try {
    await Review.deleteMany({});
    await User.deleteMany({});
    await Trainer.deleteMany({});
    await Product.deleteMany({});
    await Product.create(productSeeds);
    await Trainer.create(trainerSeeds);

    await User.create(userSeeds);

    for (let i = 0; i < reviewSeeds.length; i++) {
      const { _id, reviewAuthor } = await Review.create(reviewSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: reviewAuthor },
        {
          $addToSet: {
            reviews: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Seeds have been added!');
  process.exit(0);
});
