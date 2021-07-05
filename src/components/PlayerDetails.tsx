import React from "react";
import {SongType} from "../utils/utils";

interface PlayerDetailsProps {
    song: SongType
}

export const PlayerDetails = ({song}: PlayerDetailsProps) => {
    return (
        <div className={"c-player--details"}>
            <div className={"details-img"}>
                <img src={song.img_src} alt={song.title}/>
            </div>
            <h3 className={"details-title"}>{song.title}</h3>
            <h4 className={"details-artist"}>{song.artist}</h4>
        </div>
    )
}

export default PlayerDetails
