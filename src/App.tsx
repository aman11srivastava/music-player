import React, {useEffect, useState} from 'react';
import {SongType} from "./utils/utils";
import Player from "./components/Player";

const App = () => {
    const [songs, setSongs] = useState<SongType[]>([
        {
            title: "Forget me too ft. Halsey",
            artist: "Machine Gun Kelly",
            img_src: "./assets/song-1.jpg",
            src: "./music/on-n-on.mp3"
        },
        {
            title: "Song 2",
            artist: "Artist 2",
            img_src: "./assets/song-2.jpg",
            src: "./music/somebody-new.mp3"
        },
        {
            title: "Song 3",
            artist: "Artist 3",
            img_src: "./assets/song-3.jpg",
            src: "./music/on-n-on.mp3"
        },
        {
            title: "Song 4",
            artist: "Artist 4",
            img_src: "./assets/song-4.jpg",
            src: "./music/somebody-new.mp3"
        }
    ])

    const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
    const [nextSongIndex, setNextSongIndex] = useState<number>(currentSongIndex + 1);

    useEffect(() => {
        if (currentSongIndex + 1 > songs.length - 1){
            setNextSongIndex(0)
        }
        else {
            setNextSongIndex(currentSongIndex + 1);
        }
    }, [currentSongIndex, songs.length])

    return (
        <div className="App">
            <Player
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                songs={songs}
                nextSongIndex={nextSongIndex}
            />
        </div>
    );
}

export default App;
