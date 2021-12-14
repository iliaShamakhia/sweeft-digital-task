import React from "react";

const User = ({ user }) => {
    return (
        <div className='item'>
          <div className='item-content'>
            <img src={`${user.imageUrl}/${user.id}`} alt='user-pic'></img>
            <div className='item-content-description'>
              <strong>{user.prefix } {user.name} {user.lastName}</strong>
            </div>
            <div className="item-content-description">{user.title}</div>
          </div>
        </div>
    );
}

export default User;