import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faPause, faForward, faBackward} from '@fortawesome/free-solid-svg-icons'

interface PlayerControlsProps {
    isPlaying: boolean
    setIsPlaying: (val: boolean) => void
    skipSong: (value: boolean) => void
}

export const PlayerControls = ({isPlaying, setIsPlaying, skipSong}: PlayerControlsProps) => {
    return(
        <div className={"c-player--controls"}>
            <button className={"skip-btn"} onClick={() => skipSong(false)}>
                <FontAwesomeIcon icon={faBackward}/>
            </button>
            <button className={"play-btn"} onClick={() => setIsPlaying(!isPlaying)}>
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay}/>
            </button>
            <button className={"skip-btn"}  onClick={() => skipSong(true)}>
                <FontAwesomeIcon icon={faForward}/>
            </button>

        </div>
    )
}

export default PlayerControls
