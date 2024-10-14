const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination : (req, file, cb) =>{
        cb(null,'src/public/');
    },
    filename : (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage : storage,
    //Límite de 10 megas
    limits : { fileSize : 5 * 1024 * 1024 },
    //Check for archivos no compatibles
    fileFilter : (req,file,cb) => {
        const filetypes = /jpeg|jpg|png|/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        if(mimetype && extname){
            return cb(null,true)
        }
        cb(new Error('Error: El archivo debe ser una imagen (JPEG, JPG, PNG)'));
    }
}).single('img');
//El campo en el formulario debe llamarse 'img'

module.exports = upload;