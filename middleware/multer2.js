
// Packages
 /*
import {fileURLToPath} from 'url';
import {dirname} from 'path' ;
import multer from 'multer' ;
import path from 'path';
import * as child from 'child_process';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import fs from 'fs';
*/
/* -------------------------------------------------------------------------- /
/                                Disk Storage                                /
/ -------------------------------------------------------------------------- 

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync(path.join(__dirname, '../../uploads'))) {
      child.exec(`mkdir "${path.join(__dirname, '../../uploads')}"`);
    }
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname),
    );
  },
  fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);
    if (
      ext !== '.jpg' &&
      ext !== '.jpeg' &&
      ext !== '.png' &&
      ext !== '.gif' &&
      ext !== '.svg'
    ) {
      return cb(new Error('Only images are allowed'));
    }
    cb(null, true);
  },
}); 

*/

/*---------------------------------- CONST --------------------------------- 
const upload = multer({ storage: storage });
export const fileUpload = upload.fields([
  { name: 'profilePic', maxCount: 1 },
  { name: 'gallery', maxCount: 5 },
]);*/

// Multer config // 

import multer, {diskStorage} from "multer";
import {join, dirname} from "path";
import { fileURLToPath } from "url";
import { callbackify } from "util";
const MIME_TYPES = {
"image/jpg":"jpg" , 
"image/jpeg":"jpeg",
"image/png":"png",
};

export default multer( {
  storage: diskStorage({
    destination:(req, file, callback)=>
{
  const __dirname = dirname(fileURLToPath(import.meta.url));
  callback(null, join(__dirname, "../uploads2/"))
},
filename:(req, file, callback) => {
  const name = file.originalname.split("_").join("_");
  const extension = MIME_TYPES[file.mimetype];
  callback(null, name+Date.now() + "." + extension);

},

  }),
  limits: 10 * 1024 * 1024,

}).single("carPic") 




    