import React, { useState } from "react"
import tracks from "../content/tracks"

const TrackContext = React.createContext();

const TrackProvider = ({children}) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedTrack, setSelectedTrack] = useState(null);

    return (
        <TrackContext.Provider value={{tracks, selectedItem, setSelectedItem, selectedTrack, setSelectedTrack}}>
            {children}
        </TrackContext.Provider>
    )
}

export default TrackProvider;
export {
    TrackContext
};