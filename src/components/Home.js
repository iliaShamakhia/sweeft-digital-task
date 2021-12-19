import React from "react";
import User from './User';
import { Link } from "react-router-dom";

const Home = ({users, loading}) => {
    return (
        <div className="container">
        <div className='list'>
          {users && users.map(user => <Link className='item' key={user.id} to={`/users/${user.id}`}><User user={user} /></Link>)}
        </div>
        {loading && <div className='loading'>Loading ...</div>}
      </div>
    );
}

export default Home;