import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FiEye, FiGithub } from "react-icons/fi";

export interface IProjectInfo {
	id?: number;
	title: string;
	technologies: string[];
	description: string;
	imgSrc: StaticImageData | string;
	gitHubRepo: string;
	liveLink?: string;
}

const Card = ({
	title,
	technologies,
	description,
	imgSrc,
	gitHubRepo,
	liveLink,
}: IProjectInfo) => {
	return (
		<div className="card">
			<div className="card__img-wrapper">
				<Image src={imgSrc} fill alt="card-image" />
			</div>
			<div className="card__content">
				<div className="card__header">
					<h2 className="card__title">{title}</h2>
					<div className="link-group">
						<a
							target="_blank"
							href={gitHubRepo}
							className="card__link"
							title="Github Repo"
						>
							<FiGithub size={20} />
						</a>

						{liveLink && (
							<a
								target="_blank"
								href={liveLink || ""}
								className="card__link"
								title="View Demo"
							>
								<FiEye size={20} />
							</a>
						)}
					</div>
				</div>
				<p className="card__description">{description}</p>
				<ul className="tag-group">
					{technologies.map((technology, index) => (
						<li key={index} className="tag">
							{technology}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Card;
