import React, { useState, useEffect } from 'react';
import User from './components/User';

function App() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

 const getUsers = async page => {
    const users = await (
      await fetch(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/20`)
    ).json();
    return users.list;
  };

  useEffect(()=>{
    const loadUsers = async () => {
      setLoading(true);
      const newUsers = await getUsers(page);
      setUsers((prev) => [...prev, ...newUsers]);
      setLoading(false);
    };
    loadUsers();
  },[page]);

  window.onscroll=function(){
      if(window.innerHeight + document.documentElement.scrollTop===document.documentElement.offsetHeight){
        setPage(prev => prev + 1);
      }
  }

  return (
    <div className="container">
      <div className='list'>
        {users && users.map(user => <User key={user.id} user={user} />)}
      </div>
      {loading && <div className='loading'>Loading ...</div>}
    </div>
  );
}

export default App;
