import React from "react";
import SpotifyLogo from "../images/spotify-logo.png";

import { Icon } from "react-icons-kit";
import { androidHome } from "react-icons-kit/ionicons/androidHome";
import { iosSearchStrong } from "react-icons-kit/ionicons/iosSearchStrong";
import { folder } from "react-icons-kit/ionicons/folder";
import { androidAddCircle } from "react-icons-kit/ionicons/androidAddCircle";
import { iosHeart } from "react-icons-kit/ionicons/iosHeart";
import { iosCloudDownload } from "react-icons-kit/ionicons/iosCloudDownload";

import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="Navbar">
			<div className="NavbarItems">
				<div className="NavbarLogo">
					<img src={SpotifyLogo} alt="" />
				</div>
				<div className="NavbarLinks">
					<div className="NavbarLinkItem">
						<NavLink to="/" className="NavbarLink">
							<div className="NavbarLinkItemIcon" style={{ color: "#b3b3b3" }}>
								<Icon size={22} icon={androidHome} />
							</div>
							<div className="NavbarLinkItemText">
								<span>Home</span>
							</div>
						</NavLink>
					</div>
					<div className="NavbarLinkItem">
						<NavLink to="/search" className="NavbarLink">
							<div className="NavbarLinkItemIcon" style={{ color: "#b3b3b3" }}>
								<Icon size={22} icon={iosSearchStrong} />
							</div>
							<div className="NavbarLinkItemText">
								<span>Search</span>
							</div>
						</NavLink>
					</div>
					<div className="NavbarLinkItem">
						<NavLink to="/library" className="NavbarLink">
							<div className="NavbarLinkItemIcon" style={{ color: "#b3b3b3" }}>
								<Icon size={22} icon={folder} />
							</div>

							<div className="NavbarLinkItemText">
								<span>Your Library</span>
							</div>
						</NavLink>
					</div>
					<div className="NavbarSubtitle">
						<span>Playlists</span>
					</div>
					<div className="NavbarLinkItem">
						<div className="NavbarLinkItemIcon" style={{ color: "#b3b3b3" }}>
							<Icon size={22} icon={androidAddCircle} />
						</div>

						<div className="NavbarLinkItemText">
							<span>Create Playlist</span>
						</div>
					</div>
					<div className="NavbarLinkItem">
						<div className="NavbarLinkItemIcon" style={{ color: "#b3b3b3" }}>
							<Icon size={22} icon={iosHeart} />
						</div>

						<div className="NavbarLinkItemText">
							<span>Liked Songs</span>
						</div>
					</div>

					<div className="NavbarLinkItem">
						<div className="NavbarLinkItemIcon" style={{ color: "#b3b3b3" }}>
							<Icon size={22} icon={iosCloudDownload} />
						</div>

						<div className="NavbarLinkItemText">
							<span>Install App</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
