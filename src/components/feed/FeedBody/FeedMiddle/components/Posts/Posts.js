import "./Post.css";
import posts from "./../../../../../../dummy-data/posts.json";

// own components
import Image from "./attachments/Image/Image";
import Video from "./attachments/Video/Video";
import Audio from "./attachments/Audio/Audio";
import Pdf from "./attachments/Pdf/Pdf";
import Header from "./Header/Header";
import Description from "./Description/Description";

const Posts = () => {
	return (
		<>
			{/* post section start  */}
			<div className="post-container">
				<Header />
				<Description />

				{/* attachment section start  */}
				<div className="attachment-container">
					<Image />
					{/* <Video/> */}
					{/* <Audio/> */}
					{/* <Pdf/> */}
				</div>
				{/* attachment section end  */}

			</div>
			{/* post section end  */}
		</>
	);
};

export default Posts;
