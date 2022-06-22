import "./Navbar.css";

const Navbar = () => {
	return (
		<>
			<div className="row">
				{/* **** navbar-left start **** */}
				<div className="col-3 navbar-left">
					<img src="/assets/logo/esoulmate-logo.png" alt="logo" />
					<h2>Esoulmate</h2>
				</div>
				{/* **** navbar-left end ****  */}

				{/* **** navbar-middle start ****  */}
				<div className="col-4 navbar-middle">
					<div className="search-bar">
						<i className="bi bi-search-heart"></i>
						<input
							type="search"
							name="search"
							id="search"
							autoComplete="off"
							placeholder="search for knowledge"
						/>
					</div>
				</div>
				{/* **** navbar-middle end **** */}

				{/* **** navbar-right start **** */}
				<div className="col-5 navbar-right">
					<div className="icon-style">
						<label htmlFor="create-post">
							<i className="bi bi-plus-circle-dotted"></i>
						</label>

						<i className="bi bi-people-fill"></i>

						<i className="bi bi-chat-heart"></i>

						<i className="bi bi-bell"></i>
					</div>

					<img
						src="/assets/images/profile/tangil.png"
						alt="profile-img"
						className="img-fluid profile-photo"
					/>
				</div>
				{/* **** navbar-right end  **** */}
			</div>
		</>
	);
};

export default Navbar;
