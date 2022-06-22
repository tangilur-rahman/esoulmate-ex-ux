import "./FeedPage.css";

// own components
import Navbar from "../../components/feed/Navbar/Navbar";
import FeedBody from "../../components/feed/FeedBody/FeedBody";

const FeedPage = () => {
	return (
		<>
			<div className="container-fluid p-0">
				<div className="row feed-nav-container">
					<div className="col-11">
						<Navbar />
					</div>
				</div>
				<div className="row feed-body-container">
					<div className="col-11 p-0">
						<FeedBody/>
					</div>
				</div>
			</div>
		</>
	);
};

export default FeedPage;
