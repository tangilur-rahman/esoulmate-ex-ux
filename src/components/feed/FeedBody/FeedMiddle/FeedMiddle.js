import "./FeedMiddle.css";
import { useState } from "react";
import HorizontalScroll from "react-scroll-horizontal";
import TextareaAutosize from 'react-textarea-autosize';

//own components
import stories_data from "./../../../../dummy-data/stories.json";

const FeedMiddle = () => {
	// for privacy selection
	const [privacy, setPrivacy] = useState("");
	const [priDrop, setPriDrop] = useState("");

	// for knowledge selection
	const [knowledge, setKnowledge] = useState("");
	const [dropdown, setDropdown] = useState("");

	// for horizontalScroll parent container-style
	const parent = { width: `100%`, height: "126px" };

	return (
		<>
			{/* **** feed-middle start **** */}
			<div className="col-6 p-0 feed-middle">
				{/* stories section start */}

				<div className="stories" style={parent}>
					<HorizontalScroll>
						{/* current-user add story  */}
						<form encType="multipart/form-data">
							<input
								type="file"
								name="your-story"
								accept="image/*"
								id="your-story"
								style={{ display: "none" }}
							/>
							<label htmlFor="your-story">
								<div className="story" id="your-story">
									<img
										src="/assets/images/profile/tangil.png"
										alt="profile-img"
										className="img-fluid"
									/>
									<i className="bi bi-plus-circle-fill"></i>
								</div>
							</label>
						</form>

						{/* another users story  */}
						{stories_data &&
							stories_data.map((value) => {
								return (
									<div className="story" key={value.id}>
										<img src={value.profile_img} alt="profile-img" />
									</div>
								);
							})}
					</HorizontalScroll>
				</div>
				{/* stories section end */}

				{/* create-post section start  */}
				<div className="create-post-container">
					<div className="user-info">
						<img
							src="/assets/images/profile/tangil.png"
							alt="profile-img"
							className="profile-photo img-fluid"
						/>

						<div className="user-name">
							<h6>Tangilur Rahman</h6>

							<div
								className={
									priDrop ? "privacy-container active" : "privacy-container"
								}
								onClick={() => setPriDrop(!priDrop)}
							>
								<input
									type="text"
									placeholder="🌍  Public"
									readOnly
									value={privacy}
								/>
								<div className="option">
									<div onClick={() => setPrivacy("🌍  Public")}>
										<i className="bi bi-globe"></i>Public
									</div>
									<div onClick={() => setPrivacy("🧑🏻‍🤝‍🧑🏻  Friends")}>
										<i className="bi bi-people-fill"></i>Friends
									</div>
									<div onClick={() => setPrivacy("🔒  Only Me")}>
										<i className="bi bi-lock-fill"></i>Only Me
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="input-container">
						<form encType="multipart/form-data" onSubmit={event  => event.preventDefault()}>

						  <TextareaAutosize name="for-text" autoFocus id="create-post" placeholder="Share your knowledge & skills or ask me ..." />
							

							<input
								type="file"
								name="for-image"
								accept="image/*"
								id="for-image"
								style={{ display: "none" }}
							/>
							<input
								type="file"
								name="for-video"
								accept="video/mp4,video/x-m4v,video/*"
								id="for-video"
								style={{ display: "none" }}
							/>

							<input
								type="file"
								accept="audio/mp3,audio/*;capture=microphone"
								name="for-audio"
								id="for-audio"
								style={{ display: "none" }}
							/>

							<input
								type="file"
								name="for-pdf"
								id="for-pdf"
								accept="application/pdf,application/vnd.ms-excel"
								style={{ display: "none" }}
							/>

							<input
								type="submit"
								value="Share"
								id="for-share"
								style={{ display: "none" }}
							/>
						</form>
					</div>

					<div className="attachment-container">

						<label htmlFor="for-image" title="attach image" className="title-tip title-tip-up">
						<i className="bi bi-image"></i>
						</label>

						<label htmlFor="for-video" title="attach video" className="title-tip title-tip-up">
						<i className="bi bi-play-circle"></i>
						</label>

						<label htmlFor="for-audio" title="attach audio" className="title-tip title-tip-up">
						<i className="bi bi-mic"></i>
						</label>

						<label htmlFor="for-pdf" title="attach file" className="title-tip title-tip-up">
						<i class="bi bi-file-earmark-medical"></i>
						</label>

						<label htmlFor="for-poll" title="create poll" className="title-tip title-tip-up">
						<i class="bi bi-plus-slash-minus"></i>
						</label>
					</div>

					<div className="share-container">
						<div
							className={
								dropdown ? "selection-container active" : "selection-container"
							}
							onClick={() => setDropdown(!dropdown)}
						>
							<input
								type="text"
								placeholder="🔰  knowledge"
								readOnly
								value={knowledge}
							/>
							<div className="option">
								<div onClick={() => setKnowledge("🔰  Knowledge")}>
									<i className="bi bi-book-half"></i>
									Knowledge
								</div>
								<div onClick={() => setKnowledge("⛷️  Skill")}>
									<i className="bi bi-mortarboard"></i>
									 Skill
								</div>
								<div onClick={() => setKnowledge("❓  Q & A")}>
									<i className="bi bi-patch-question"></i>
									Q & A
								</div>
							</div>
						</div>
						<label htmlFor="for-share"><h4>Share</h4></label>
					</div>
				</div>

				{/* create-post section end  */}

				{/* post section start  */}
				<div className="post-container">
					posts
				</div>
				{/* post section end  */}
			</div>
			{/* **** feed-middle end **** */}
		</>
	);
};

export default FeedMiddle;
