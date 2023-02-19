import { useContext } from "react";

import UserContext from "./Context";

const BattleButton = () => {
    const { isBattleActive, setIsBattleActive } = useContext(UserContext);
    // console.log('battle', isBattleActive)

    const handleClick = () => {
        setIsBattleActive(!isBattleActive);
        // console.log('battle', isBattleActive)
    }

    return (
        <button type="button" className="btn btn-outline-danger" onClick={handleClick}>Battle Mode</button> 
        )
}

export default BattleButton;