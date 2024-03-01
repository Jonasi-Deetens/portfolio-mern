import React, { useState } from "react"
import tracks from "../content/tracks"

const TrackContext = React.createContext();

const TrackProvider = ({children}) => {
    const [selectedTrack, setSelectedTrack] = useState(null);

    return (
        <TrackContext.Provider value={{tracks, selectedTrack, setSelectedTrack}}>
            {children}
        </TrackContext.Provider>
    )
}

export default TrackProvider;
export {
    TrackContext
};