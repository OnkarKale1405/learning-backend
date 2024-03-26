import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET  
});

const uploadOnCloudinary = async (path) => {
    try{
        if(!path) return null ;
        // upload the file on cloudinary

        const response = await cloudinary.uploader.upload(path, {
            resource_type: "auto"
        })
        // file has been uploaded successfully
        // console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(path);
        return response
    }
    catch (err){
        fs.unlinkSync(path); // remove the locally saved temporary file as the upload operation got failed
        return null ;
    }
}

export {uploadOnCloudinary} ;