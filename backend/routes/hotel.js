const router = require("express").Router();

router.post("/:username", addHotel);
router.get("/", getAllHotels);

async function addHotel(req, res, next) {
  let { username } = req.params;
  let { Name, Branch, Location } = req.body;

  let params = {
    OwnerUser: username,
    Name: Name,
    Branch: Branch,
    Location: Location
  };

  try {
    const q = await query.hotelQueriesHandler.hotelInsert(params);
    res.status(200).send({ message: "hotel Added" });
  } catch (error) {
    console.log(error);

    throw error;
  }
}

async function getAllHotels(req, res, next) {
  try {
    const q = await query.hotelQueriesHandler.hotelInsert(params);
    res.status(200).send({ message: "hotel Added" });
  } catch (error) {
    console.log(error);

    throw error;
  }
}

module.exports = function(app) {
  app.use("/hotels", router);
};
