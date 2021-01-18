import React from "react";

const Playlists = () => {
	return (
		<div className="PlaylistsContainer">
			<div className="Playlists">
				<h3>Playlists</h3>
				<span className="SeeAll">See all</span>
			</div>
			<div className="PlayCards">
				<div className="PlayCard CustomPlay">
					<p className="PlayCardSongs">
						Juice WRLD <span>Bad Boy • </span> CJ
						<span> Whoopty • </span> Jack Harlow <span>Way Out • </span>
						DaBaby <span>Masterpiece •</span> Polo G <span>Martin • </span> Lil
						Baby <span> On Me </span>
					</p>
					<div className="PlayCardLiked">
						<h1 className="PlayCardTitle">Liked Songs</h1>
						<p className="PlayCardLikedSongsText">247 liked songs</p>
					</div>
				</div>

				<div className="PlayCard">
					<div className="HomeCardImage card-five"></div>
					<div className="HomeCardTitle">Backdoor</div>
					<div className="HomeCardGenre">Lil Durk</div>
				</div>
				<div className="PlayCard">
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

export default Playlists;
