import React, { useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import User from "./User";

const UserInfo = () => {
    const [user, setUser] = useState({});
    const [address, setAddress] = useState({});
    const [company, setCompany] = useState({});
    const [friends, setFriends] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({});

    window.onscroll=function(){
        if((window.innerHeight + document.documentElement.scrollTop===document.documentElement.offsetHeight)&&pagination.nextPage!==null){
          setPage(prev => prev + 1);
        }
    }

    const id = useParams().id;

    const getFriends = async (id,page) => {
        const friends = await (
          await fetch(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/${page}/20`)
        ).json();
        return friends;
      };


    const getUser = async id => {
        const user = await (
          await fetch(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`)
        ).json();
        return user;
      };

    useEffect(()=>{
        const loadUser = async () => {
            const newUser = await getUser(id);
            setUser(newUser);
            setAddress(newUser.address);
            setCompany(newUser.company);
            setLoading(true);
            const newFriends = await getFriends(id,page);
            setFriends(newFriends.list);
            setPagination(newFriends.pagination);
            setLoading(false);
          };
          const loadFriends = async () => {
            setLoading(true);
            const newFriends = await getFriends(id,page);
            setFriends(prev => [...prev, ...newFriends.list]);
            setPagination(newFriends.pagination);
            setLoading(false);
          };
          loadUser();
          loadFriends();
    },[id,page]);

    return (
        <div className="container">
            <div className="header-wrapper">
                <div className="header">
                    <img src={`${user.imageUrl}/${user.id}`} alt="Angie Olson"></img>
                    <fieldset className="left-info">
                        <legend>Info</legend>
                        <div><strong>{user.prefix } {user.name} {user.lastName}</strong></div>
                        <div><i>{user.title}</i></div>
                        <br></br>
                        <div><span>Email</span>: {user.email}</div>
                        <div><span>Ip Address</span>: {user.ip}</div>
                        <div><span>Ip Address</span>: {user.ip}</div>
                        <div><span>Job Area</span>: {user.jobArea}</div>
                        <div><span>Job Type</span>: {user.jobType}</div>
                    </fieldset>
                    <fieldset className="right-info">
                        <legend>Address</legend>
                        <div><strong>{company.name} {company.suffix}</strong></div>
                        <div><span>City</span>: {address.city}</div>
                        <div><span>Country</span>: {address.country}</div>
                        <div><span>State</span>: {address.state}</div>
                        <div><span>Street Address</span>: {address.streetAddress}</div>
                        <div><span>ZIP</span>: {address.zipCode}</div>
                    </fieldset>
                </div>
                <div>
                    <div className="breadcrumbs">
                      
                    </div>
                    <h2>Friends:</h2>
                    <div className="list">
                        {friends.map((friend,i) => <Link className='item' key={i} to={`/users/${friend.id}`}><User user={friend} /></Link>)}
                    </div>
                    {loading && <div className='loading'>Loading ...</div>}
                </div>
            </div>
        </div>
    );
}

export default UserInfo;