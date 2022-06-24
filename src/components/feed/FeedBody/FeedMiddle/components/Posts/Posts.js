import posts from "./../../../../../../dummy-data/posts.json";
import "./Post.css";

// own components
import Audio from "./attachments/Audio/Audio";
import Image from "./attachments/Image/Image";
import Pdf from "./attachments/Pdf/Pdf";
import Video from "./attachments/Video/Video";
import Description from "./Description/Description";
import Header from "./Header/Header";

const Posts = () => {
	return (
		<>
			{/* rendering section start */}

			{posts &&
				posts.map((value) => {
					const { profile, name, time, privacy, description, post, type, id } =
						value;
					return (
						<div className="post-container" key={id}>
							{/* post section start  */}
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
							{/* post section end  */}
						</div>
					);
				})}

			{/* rendering section start */}
		</>
	);
};

export default Posts;
