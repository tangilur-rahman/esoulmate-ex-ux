import "./Description.css"
import ReadMoreReact from "read-more-react";

const Description = () => {
  return (
    <>
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
    </>
  )
}

export default Description