import React from 'react'; 
import './CharComponent.css';

const CharComponent = (props) => {
    
    const { char , del } = props;

    return (
        <div
            className="CharComponent"
            onClick={del}>
            {char}
        </div>
    )
}

export default CharComponent;