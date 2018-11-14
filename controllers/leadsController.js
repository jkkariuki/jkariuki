const path = require("path");
const router = require("express").Router();
const db = require("../models");

const leadFunctions = {
    create: function(req, res){
        db.Lead
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}

router.post("/api/leads", leadFunctions.create)

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  module.exports = router;