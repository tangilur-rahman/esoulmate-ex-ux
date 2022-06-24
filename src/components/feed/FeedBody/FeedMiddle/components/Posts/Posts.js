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
			{/* rendering section start */}

			{posts &&
				posts.map((value) => {
					const { profile, name, time, privacy, description, post, type } =
						value;
					return (
						<>
							{/* post section start  */}
							<div className="post-container">
								<Header
									profile={profile}
									name={name}
									time={time}
									privacy={privacy}
								/>

								<Description description={description} />

								{/* attachment section start  */}
								<div className="attachment-container">
									{(type === "image" && <Image post={post} />) ||
										(type === "video" && <Video post={post} />) ||
										(type === "audio" && <Audio post={post} />) ||
										(type === "document" && <Pdf post={post} />)}
								</div>
								{/* attachment section end  */}
							</div>
							{/* post section end  */}
						</>
					);
				})}

			{/* rendering section start */}
		</>
	);
};

export default Posts;
