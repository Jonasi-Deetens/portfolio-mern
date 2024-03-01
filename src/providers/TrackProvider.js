import React, { useState } from "react"
import tracks from "../content/tracks"

const TrackContext = React.createContext();

const TrackProvider = ({children}) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <TrackContext.Provider value={{tracks, selectedItem, setSelectedItem, selectedCategory, setSelectedCategory}}>
            {children}
        </TrackContext.Provider>
    )
}

export default TrackProvider;
export {
    TrackContext
};