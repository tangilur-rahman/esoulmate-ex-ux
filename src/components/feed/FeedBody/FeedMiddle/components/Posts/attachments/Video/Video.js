import "./Video.css"

const Video = () => {
  return (
   
     <video src={"/assets/posts/video.mp4"} controls="controls" controlsList="nodownload" autoPlay="true" muted className="for-video"/>
  
  )
}

export default Video