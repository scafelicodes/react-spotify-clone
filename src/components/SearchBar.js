import React from "react";
import { Icon } from "react-icons-kit";

import { iosArrowLeft } from "react-icons-kit/ionicons/iosArrowLeft";
import { iosArrowRight } from "react-icons-kit/ionicons/iosArrowRight";
import { androidPerson } from "react-icons-kit/ionicons/androidPerson";
import { androidArrowDropdown } from "react-icons-kit/ionicons/androidArrowDropdown";

const SearchBar = () => {
	return (
		<div className="SearchBar">
			<div className="NavIcons">
				<div className="NavPrev NavIconItem" style={{ color: "#b3b3b3" }}>
					<Icon className="NavIcon" icon={iosArrowLeft} />
				</div>
				<div className="NavNext NavIconItem" style={{ color: "#b3b3b3" }}>
					<Icon className="NavIcon" icon={iosArrowRight} />
				</div>
			</div>
			<div className="NavSearchArea">
				<input
					type="text"
					placeholder="Search for Artists, Songs, or Podcasts"
				/>
			</div>
			<div className="NavUserInfo">
				<Icon
					className="NavIcon"
					icon={androidPerson}
					style={{ color: "#ffffff" }}
				/>
				<span>harrnish</span>
				<Icon
					className="NavIcon"
					icon={androidArrowDropdown}
					style={{ color: "#ffffff" }}
				/>
			</div>
		</div>
	);
};

export default SearchBar;
