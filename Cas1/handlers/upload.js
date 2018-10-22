const bucket = "./bucket/";
const allowedTypes = ["image/jpg", "image/jpeg", "image/pjpeg", "image/gif", "image/png", ] 

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

module.exports = {
    uploadFile
}