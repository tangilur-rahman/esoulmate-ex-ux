import "./Post.css";
import posts from "./../../../../../../dummy-data/posts.json";
import ReadMoreReact from "read-more-react";

// own components 
import Image from "./attachments/Image/Image";
import Video from "./attachments/Video/Video";
import Audio from "./attachments/Audio/Audio";
import Pdf from "./attachments/Pdf/Pdf";

const Posts = () => {
	return (
		<>
			{/* post section start  */}
			<div className="post-container">
				{/* header-section start  */}
				<div className="header-section">
					<div className="left">
						<img
							src="/assets/images/profile/tangil.png"
							alt="profile-img"
							className="profile-photo img-fluid"
						/>

						<div className="user-info">
							<h6>Tangilur Rahman</h6>

							<div className="extra-info">
								<span>7 Minutes</span>
								<span>.</span>
								<span>
									<i className="bi bi-globe"></i>
								</span>
							</div>
						</div>
					</div>

					<div className="right">
						<i class="bi bi-three-dots"></i>
					</div>
				</div>
				{/* header-section end  */}

				{/* description section start  */}
				<div className="description-container">
					<ReadMoreReact
						text={
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repudiandae officiis laboriosam illum eveniet, voluptatum repellendus. Eaque, reiciendis, officia provident laboriosam ratione tenetur eos nihil dolorem non vel voluptate enim. Omnis eos nisi vel suscipit, iste incidunt dignissimos quidem in possimus aspernatur beatae magni molestias maxime est vitae! Perspiciatis eaque laborum temporibus corporis ipsa repellendus voluptas odio. Consequuntur accusantium voluptatibus suscipit nesciunt obcaecati vitae fuga earum explicabo eos"
						}
						readMoreText={"see more..."}
					/>
				</div>
				{/* description section end  */}

           {/* attachment section start  */}
           <div className="attachment-container">
            
            <Image/>
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
