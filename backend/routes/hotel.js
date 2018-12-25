const router = require("express").Router();

router.post("/:username", addHotel);
router.get("/", getAllHotels);
//router.get("/:username/owner", isOwner, getHotelByOwner);
//router.get("/:username/broker", isOwner, getHotelByBroker);
//router.get("/:username", getHotelAddRequests);

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
    await query.hotelQueriesHandler.hotelInsert(params);
    res.status(200).send({ message: "hotel Added" });
  } catch (error) {
    console.log(error);

    throw error;
  }
}

function getAllHotels(req, res, next) {
  query.hotelQueriesHandler.hotelSelect(req, res, null, function(result) {
    console.log(result);

    res.status(200).render("pages/browse_hotels", { hotels: result });
  });
}

function getHotelByOwner(req, res, next) {
  let { username } = req.params;
  let { Name, Branch, Location } = req.body;

  let params = {
    OwnerUser: username,
    Name: Name,
    Branch: Branch,
    Location: Location
  };

  try {
    query.hotelQueriesHandler.hotelInsert(params);
    res.status(200).send({ message: "hotel Added" });
  } catch (error) {
    console.log(error);

    throw error;
  }
}

module.exports = function(app) {
  app.use("/hotels", router);
};
