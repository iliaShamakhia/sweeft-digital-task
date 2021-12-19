import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import UserInfo from './components/UserInfo';
import Home from './components/Home';

function App() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);


 const getUsers = async page => {
    const users = await (
      await fetch(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/20`)
    ).json();
    return users;
  };

  useEffect(()=>{
    const loadUsers = async () => {
      setLoading(true);
      const newUsers = await getUsers(page);
      setUsers(prev => [...prev, ...newUsers.list]);
      setPagination(newUsers.pagination);
      setLoading(false);
    };
    loadUsers();
  },[page]);

  window.onscroll=function(){
      if((window.innerHeight + document.documentElement.scrollTop===document.documentElement.offsetHeight)&&pagination.nextPage!==null){
        setPage(prev => prev + 1);
      }
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home users={users} loading={loading}/>}/>
        <Route path="/users/:id" element={<UserInfo/>}/>
      </Routes>
    </Router>
  );
}

export default App;
