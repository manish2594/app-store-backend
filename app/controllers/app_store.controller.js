const db = require("../models");
const AppStores = db.app_stores;
const Op = db.Sequelize.Op;
const parseApk = require('apk-parser');


// Retrieve all  from the database.
exports.findAll = (req, res) => {
    //   res.send('Hiiiii')
      AppStores.findAll().then((result) => {
         return res.status(200).json({data:result})
      }).catch((err) => {
       return res.status(500).json({error:err})
      });
    };


exports.create = (req, res) => {
    // Save App in the database
    const incomingData = {name:req.body.name,description:req.body.description,filePath:req.file.path};


    console.log('dataaaaaaa',incomingData);
    console.log('dataaaaaaa',req.file);


    parseApk(`${req.file.path}`, 50* 1024 * 1024,function (err, appConfig) {
        // Handle error or do something with data.
        console.log('daataaaa',appConfig);
        console.log('errrorrrrr',err);
        if(err instanceof Error) return res.status(500).json({error:err});

        AppStores.create(incomingData)
        .then(data => {
         return res.status(200).json({data:data,message:"Created Successfully",appSize:req.file.size,appName:req.body.name,version:appConfig.versionName});
        })
        .catch(err => {
         return res.status(500).send({
            message:
              err.message || "Some error occurred while creating the App."
          });
        });
        // return res.status(200).json({data:data});
    });
   
  };




