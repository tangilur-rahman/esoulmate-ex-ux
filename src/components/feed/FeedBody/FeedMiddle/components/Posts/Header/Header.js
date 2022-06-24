import "./Header.css"

const Header = () => {
  return (
    <>
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
    </>
  )
}

export default Header