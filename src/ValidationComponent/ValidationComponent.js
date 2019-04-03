import React from 'react';

const ValidatioComponent =(props) => {


        const { sizeOfText } = props;
        let validate = null;

        if (sizeOfText < 5) { validate = (<div>Text is to short!</div>) }
        else { validate = (<div>Text is long enought! </div>) }

        return (
            <div>
                {validate}
            </div>
        )
    }

export default ValidatioComponent;