
module.exports = app => {
    const app_stores = require("../controllers/app_store.controller");
    const multer = require("multer");
    const storage = multer.diskStorage({
        //multers disk storage settings
        destination: function(req, file, cb) {
          cb(null, "uploads/");
        },
        filename: function(req, file, cb) {
          const datetimestamp = new Date().toString();
          cb(null, datetimestamp + file.originalname);
        }
      });
      const upload = multer({ storage: storage });
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.get("/", app_stores.findAll);
  
    // Retrieve all Tutorials
    router.post("/",upload.single('file'), app_stores.create);
    app.use('/api/app_detail', router);
}