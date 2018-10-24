const bucket = "../bucket/";
const bucketAvatar = "../bucket/avatar/";
const bucketDoc = "../bucket/documents/";
const allowedTypes = ["image/jpg", "image/jpeg", "image/pjpeg", "image/gif", "image/png", ] 
const allowedDocTypes = ["application/vnd.openxmlformats-officedocument.wordprocessingml.template", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/msword", "application/vnd.ms-word.document.macroEnabled.12", "application/vnd.ms-word.template.macroEnabled.12"];
var uploadFile = (req, res) => {
    req.files.doc.mv(bucket + req.files.doc.name, (err) => {
        if(allowedTypes.indexOf(req.files.doc.mimetype) > -1) {
            if(err) {
              return res.status(500).send("Couldn't upload file: " + err);
            } else {
               return res.status(200).send("Ok");
            }
        } else {
            res.status(400).send("File type not allowed");
        }
    });
};

var uploadAvatar = (req, res) => {
    if(allowedTypes.indexOf(req.files.doc.mimetype) > -1) {
        var filechunks = req.files.doc.mimetype.split(".");
        var name = req.user.uid + "." + filechunks(filechunks.length - 1); 
        req.files.doc.mv(bucketAvatar + name, (err) => {
            if(err) {
              return res.status(500).send("Couldn't upload file: " + err);
            } else {
               return res.status(200).send("Ok");
            } 
        });
    } else {
          res.status(400).send("File type not allowed");
        }
};

var uploadDoc = (req, res) => {
    if(allowedDocTypes.indexOf(req.files.doc.mimetype) > -1) {
        console.log("dddd");
        var name = req.user.uid + "_" + req.files.doc.name;
        console.log("aaaa");
        req.files.doc.mv(bucketDoc + name, (err) => {
            if(err) {
              return res.status(500).send("Couldn't upload file: " + err);
            } else {
               return res.status(200).send("Ok");
            }
        });
    } else {
        res.status(400).send("File type not allowed");
        }
};


module.exports = {
    uploadFile,
    uploadAvatar,
    uploadDoc   
}