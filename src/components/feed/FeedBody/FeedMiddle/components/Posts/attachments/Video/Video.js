import "./Video.css";

const Video = ({ post }) => {
	return (
		<video
			src={post}
			controls="controls"
			controlsList="nodownload"
			autoPlay={true}
			muted
			className="for-video"
		/>
	);
};

export default Video;
