import React from 'react';

const User = (props) => {    
        return(
            <ul>
                <li>{props.name}</li>
                <li>{props.age}</li>
            </ul>
        );

}
export default User;