import React from "react";
import TopGenres from "./SearchComponents/TopGenres";
import BrowseAll from "./SearchComponents/BrowseAll";

const Search = () => {
	return (
		<div className="Search">
			<TopGenres />
			<BrowseAll />
		</div>
	);
};

export default Search;
