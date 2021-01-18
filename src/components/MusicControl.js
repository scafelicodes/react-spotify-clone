import React from "react";
import { Icon } from "react-icons-kit";

import { iosShuffle } from "react-icons-kit/ionicons/iosShuffle";
import { skipBackward } from "react-icons-kit/ionicons/skipBackward";
import { iosPlay } from "react-icons-kit/ionicons/iosPlay";
import { skipForward } from "react-icons-kit/ionicons/skipForward";
import { iosLoopStrong } from "react-icons-kit/ionicons/iosLoopStrong";

import { iosListOutline } from "react-icons-kit/ionicons/iosListOutline";
import { monitor } from "react-icons-kit/ionicons/monitor";
import { volumeMedium } from "react-icons-kit/ionicons/volumeMedium";

const MusicControl = () => {
	return (
		<div className="MusicControl">
			<div className="MusicControlContainer">
				<div className="ControlLeft">{/* add song details here */}</div>
				<div className="ControlCenter">
					<div className="ControlPlay">
						<div
							className="ControlPlayItem ShuffleBtn"
							style={{ color: "#b3b3b3" }}
						>
							<Icon icon={iosShuffle} />
						</div>
						<div
							className="ControlPlayItem PrevBrn"
							style={{ color: "#b3b3b3" }}
						>
							<Icon icon={skipBackward} />
						</div>
						<div
							className="ControlPlayItem Playbtn"
							style={{ color: "#b3b3b3" }}
						>
							<Icon icon={iosPlay} />
						</div>
						<div
							className="ControlPlayItem NextBtn"
							style={{ color: "#b3b3b3" }}
						>
							<Icon icon={skipForward} />
						</div>
						<div
							className="ControlPlayItem RepeatBtn"
							style={{ color: "#b3b3b3" }}
						>
							<Icon icon={iosLoopStrong} />
						</div>
					</div>
					<div className="ControlSlider">
						<div className="SongStartTime ControlItem">0:00</div>
						<div className="SongDurationSlider ControlItem"></div>
						<div className="SongEndTime ControlItem">0:00</div>
					</div>
				</div>
				<div className="ControlRight">
					<div className="ControlRightItem" style={{ color: "#b3b3b3" }}>
						<Icon icon={iosListOutline} />
					</div>
					<div className="ControlRightItem" style={{ color: "#b3b3b3" }}>
						<Icon icon={monitor} />
					</div>
					<div className="ControlRightItem" style={{ color: "#b3b3b3" }}>
						<Icon icon={volumeMedium} />
					</div>
					<div className="ControlRightItem">
						<div className="ControlVolumeSlider"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MusicControl;
