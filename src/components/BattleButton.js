import { useContext } from "react";

import UserContext from "./Context";

const BattleButton = () => {
    const { isBattleActive, setIsBattleActive } = useContext(UserContext);
    // console.log('battle', isBattleActive)

    const handleClick = () => {
        setIsBattleActive(true);
        // console.log('battle', isBattleActive)
    }

    return (
        <button type="button" className="btn btn-primary" onClick={handleClick}>Battle Mode</button>
    )
}

export default BattleButton;