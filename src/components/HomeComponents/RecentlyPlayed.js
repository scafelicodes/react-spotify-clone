import React from "react";

const RecentlyPlayed = () => {
	return (
		<div className="RecentlyPlayedContainer">
			<div className="RecentlyPlayed">
				<h3>Recently Played</h3>
				<span className="SeeAll">See all</span>
			</div>
			<div className="HomeCards">
				<div className="HomeCard">
					<div className="HomeCardImage card-three"></div>
					<div className="HomeCardTitle">Dreamland</div>
					<div className="HomeCardGenre">Morray</div>
				</div>
				<div className="HomeCard">
					<div className="HomeCardImage card-four"></div>
					<div className="HomeCardTitle">NxBody</div>
					<div className="HomeCardGenre">Hxliday</div>
				</div>
				<div className="HomeCard">
					<div className="HomeCardImage card-five"></div>
					<div className="HomeCardTitle">Backdoor</div>
					<div className="HomeCardGenre">Lil Durk</div>
				</div>
				<div className="HomeCard">
					<div className="HomeCardImage card-one"></div>
					<div className="HomeCardTitle">Southway</div>
					<div className="HomeCardGenre">Duvy</div>
				</div>
				<div className="HomeCard">
					<div className="HomeCardImage card-two"></div>
					<div className="HomeCardTitle">Smoke From Fire</div>
					<div className="HomeCardGenre">The Hics</div>
				</div>
			</div>
		</div>
	);
};

export default RecentlyPlayed;
