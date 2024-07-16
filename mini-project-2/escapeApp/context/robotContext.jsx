import React from "react";
import { useContext, useState } from "react";


const RobotContext = React.createContext();

export const RobotProvider = (props) => {
    const [robotBlurb, setRobot] = useState({ });
    const handleUpdateRobot = (blurb) => {
        setRobot(blurb)
    }

    return (
        <RobotContext.Provider value={{robotBlurb, handleUpdateRobot}}>
            {props.children}
        </RobotContext.Provider>
    );
}

export const useRobotContext = () => {
    return useContext(RobotContext);
}