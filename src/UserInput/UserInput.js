import React from 'react'; 
import './UserInput.css';

const UserInput = (props) => {
    
    const { userName , changeName } = props;

    return (
        <div >
            <h2 className="userInput">
            Your name is <input type="text" value={userName} onChange={changeName}/>?
            </h2>
        </div>
    )
}

export default UserInput; 