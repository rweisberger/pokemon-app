import { useContext } from "react";

import UserContext from "./Context";

const BattleButton = () => {
    const { isBattleActive, setIsBattleActive } = useContext(UserContext);

    const handleClick = () => {
        setIsBattleActive(!isBattleActive);
    }

    return (
        <button type="button" className="btn btn-outline-danger my-3" onClick={handleClick}>Battle Mode</button> 
        )
}

export default BattleButton;