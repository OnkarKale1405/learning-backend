import { Video } from "../models/video.models.js"
import { ApiError } from "../utils/ApiError";

const verifyVideo = async (Id) => {
    const video = await Video.findById(Id);

    if(!video){
        throw new ApiError(404,"Video not found");
    }

    return video;
}

export {
    verifyVideo
}