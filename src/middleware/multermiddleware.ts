import multer from 'multer';

const storage=multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,'uploads/');
        },

        filename:function(req,file,cb){
        
           const temp=Math.round(Math.random()*1E9);
            cb(null,`${file.fieldname}-${temp}-${file.originalname}`);
        }
});

export const upload=multer({storage:storage});