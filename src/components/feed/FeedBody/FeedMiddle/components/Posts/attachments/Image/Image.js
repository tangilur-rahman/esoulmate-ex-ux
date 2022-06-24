import "./Image.css";

const Image = ({ post }) => {
	return (
		<>
			<div className="img-container">
				<img src={post} alt="story" className="img-fluid for-image" />
			</div>
		</>
	);
};

export default Image;
