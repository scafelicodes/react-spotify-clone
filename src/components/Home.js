import React from "react";
import Shortcuts from "./HomeComponents/Shortcuts";
import RecentlyPlayed from "./HomeComponents/RecentlyPlayed";

const Home = () => {
	return (
		<div className="Home">
			<Shortcuts title="Shortcuts" className="shortcuts" />
			<br />
			<RecentlyPlayed className="recentlyPlayed" />
			<br />
			<Shortcuts title="Popular Playlists" className="popularPlaylists" />
		</div>
	);
};

export default Home;
