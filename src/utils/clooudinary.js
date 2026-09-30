import {v2 as viral} from 'cloudinary';
import fs from 'fs';

cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

const uploadToCloudinary = async (filePath) => {
    try{
        if(!filePath) return null;
        //upload the file on cloudinary
        const responce = await cloudinary.uploder.upload(filePath,{
            resource_type : "auto",
        })

        //file has been sucessfully uploaded on cloudinary, now we can delete the file from local storage
        console.log("file is uploded on cloudinary",responce.url);
        return responce;
    }
    catch(err)
    {
        fs.unlinkSync(filePath);//delete the file from local storage
        return null;
    }
}