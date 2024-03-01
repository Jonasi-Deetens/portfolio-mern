import React from "react"

const TrackContext = React.createContext();

const TrackProvider = ({children}) => {
    const tracks = ["Track1", "Track2"];

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