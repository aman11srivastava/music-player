import React, {useEffect, useRef, useState} from "react";
import {SongType} from "../utils/utils";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";

interface PlayerProps {
    currentSongIndex: number
    setCurrentSongIndex: (val: number) => void
    nextSongIndex: number
    songs: SongType[]
}

export const Player = ({currentSongIndex, nextSongIndex, setCurrentSongIndex, songs}: PlayerProps) => {
    const audioEl = useRef<any>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)

    useEffect(() => {
        if (isPlaying){
            audioEl.current.play()
        }
        else {
            audioEl.current.pause()
        }
    }, [isPlaying])

    const skipSong = (forwards: boolean = true) => {
        if (forwards){
            if (currentSongIndex){
                let currentSong: number = currentSongIndex
                currentSong++;
                if (currentSong > songs.length - 1){
                    currentSong = 0;
                }
                setCurrentSongIndex(currentSong);
            }
        }
        else {
            if (currentSongIndex){
                let currentSong: number = currentSongIndex
                currentSong--;
                if (currentSong < 0){
                    currentSong = songs.length - 1;
                }
                setCurrentSongIndex(currentSong);
            }
        }
    }

    return(
        <div className={"c-player"}>
            <audio src={songs[currentSongIndex].src} ref={audioEl}></audio>
            <h4>Playing Now</h4>
            <PlayerDetails
                song={songs[currentSongIndex]}
            />
            <PlayerControls
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                skipSong={skipSong}
            />
            <p><strong>Next up:</strong> {songs[nextSongIndex].title} by {songs[nextSongIndex].artist }</p>
        </div>
    )
}

export default Player
