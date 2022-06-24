import "./Stories.css"
import HorizontalScroll from "react-scroll-horizontal";

//own components
import stories_data from "./../../../../../../dummy-data/stories.json";

const Stories = () => {

   	// for horizontalScroll parent container-style
	const parent = { width: `100%`, height: "126px" };
  return (
    <>
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
    </>
  )
}

export default Stories