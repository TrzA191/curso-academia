import { VideoCourseProps } from "./VideoCourse.types";

export function VideoCourse(props: VideoCourseProps) {
    const { videoUrl } = props;

    return(
        
        <video src={videoUrl} controls className="w-full rounded-md shadow-md">


        </video>
    )
}