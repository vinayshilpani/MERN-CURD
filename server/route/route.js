const express = require("express");
const route = express.Router();
const moment = require("moment");
const multer = require("multer");
const Testimonial = require("../model/testimonialSchema");

route.get("/", (req, res) => {
  res.send("hello home");
});

//upload img

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileType = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileType.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

route.post("/add", upload.single("img"), async (req, res) => {
  let name = req.body.name;
  let post = req.body.post;
  let disc = req.body.disc;
  let cData = moment().format("DD-MMM-YYYY, hh:mm");
  let status = 1;
  let img = req.file.filename;

  try {
    const data = new Testimonial({
      img: img,
      name: name,
      post: post,
      disc: disc,
      cDate: cData,
      status: status,
    });

    const dataSaved = await data.save();

    if (dataSaved) {
      res.send("DataSaved");
    }
  } catch (err) {
    console.log(err);
  }
});

// get testimonials data

route.get("/getData", async (req, res) => {
  await Testimonial.find()
    .then((data) => {
      res.json(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

route.get("/getDataForHome", async (req, res) => {
  await Testimonial.find({status:"1"})
    .then((data) => {
      res.json(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});


// update
route.post("/finalUpdate/:id", async (req, res) => {
  
  let dataId = req.params.id
  let name = req.body.name;
  let post = req.body.post;
  let disc = req.body.disc;
  let status = req.body.status;
  let newUpDate = moment().format("DD-MMM-YYYY, hh:mm");

  try {
    let newValues = { $set: {name: name, post:post, disc:disc, status:status, upDate:newUpDate} };
    await Testimonial.updateMany(
      {_id:dataId},
      newValues,
      (err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  } catch (err) {
    console.log(err);
  }
});


route.get('/update/:id', async (req,res)=>{

  let userId = req.params.id;

  await Testimonial.findOne({_id:userId})
  .then((data) => {
    res.json(data);
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

})


module.exports = route;
