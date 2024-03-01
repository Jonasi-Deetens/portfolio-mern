import React from "react"
import tracks from "../content/tracks"

const TrackContext = React.createContext();

const TrackProvider = ({children}) => {
    return (
        <TrackContext.Provider value={tracks}>
            {children}
        </TrackContext.Provider>
    )
}

export default TrackProvider;
export {
    TrackContext
};