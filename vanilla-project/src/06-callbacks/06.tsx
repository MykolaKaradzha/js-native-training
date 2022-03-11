import React from 'react';
// const callback = () => {
//     alert("hey")
// }
// window.setTimeout( callback, 1000)



export const User:React.FC = () => {

    const deleteUser = () => {
        alert("user has been deleted")
    }
    const saveUser = () => {
        alert("user has been saved")
    }
    const onNameChanged = () => {
        console.log('name changed')
    }
    const focusLostHandler = () => {
        console.log("focus lost")
    }

    return (
        <div> <textarea onChange={onNameChanged} onBlur= {focusLostHandler}>Mykola</textarea>
            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>
        </div>
    );
};

