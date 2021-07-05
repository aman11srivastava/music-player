import React from "react";
import {SongType} from "../utils/utils";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";

interface PlayerProps {
    song: SongType
    nextSong: SongType
}

export const Player = ({nextSong, song}: PlayerProps) => {
    return(
        <div className={"c-player"}>
            <audio></audio>
            <h4>Playing Now</h4>
            <PlayerDetails song={song}/>
            <PlayerControls/>
            <p><strong>Next up:</strong> {nextSong.title} by {nextSong.artist}</p>
        </div>
    )
}

export default Player
