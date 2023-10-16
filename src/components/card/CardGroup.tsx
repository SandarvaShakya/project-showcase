import { CARD_DATA } from "@/data/data";
import React from "react";
import Card, { IProjectInfo } from "./Card";

const CardGroup = () => {
	return (
		<div className="card-group">
			{CARD_DATA.map(
				({
					id,
					title,
					technologies,
					description,
					imgSrc,
					gitHubRepo,
					liveLink,
				}: IProjectInfo) => (
					<Card
						key={id}
						title={title}
						technologies={technologies}
						imgSrc={imgSrc}
						description={description}
						gitHubRepo={gitHubRepo}
						liveLink={liveLink}
					/>
				)
			)}
		</div>
	);
};

export default CardGroup;
