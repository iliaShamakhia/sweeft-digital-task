import React from "react";

const UserInfo = ({user}) => {
    return (
        <div className="container">
            <div className="header-wrapper">
                <div className="header">
                    <img src={`${user.imageUrl}/${user.id}`} alt="Angie Olson"></img>
                    <fieldset class="left-info">
                        <legend>Info</legend>
                        <div><strong>{user.prefix } {user.name} {user.lastName}</strong></div>
                        <div><i>{user.title}</i></div>
                        <br></br>
                        <div><span>Email</span>: Adriana87@hotmail.com</div>
                        <div><span>Ip Address</span>: 205.44.63.69</div>
                        <div><span>Ip Address</span>: 205.44.63.69</div>
                        <div><span>Job Area</span>: Metrics</div>
                        <div><span>Job Type</span>: Facilitator</div>
                    </fieldset>
                    <fieldset class="right-info">
                        <legend>Address</legend>
                        <div><strong>Feest Inc LLC</strong></div>
                        <div><span>City</span>: Lake Dewayneshire</div>
                        <div><span>Country</span>: Lao People's Democratic Republic</div>
                        <div><span>State</span>: Alaska</div>
                        <div><span>Street Address</span>: 218 Hilll Viaduct</div>
                        <div><span>ZIP</span>: 64894</div>
                    </fieldset>
                </div>
                <div>
                    <div className="breadcrumbs"><a href="/user/1">Dr. Angie Olson</a></div>
                    <h2>Friends:</h2>
                    <div className="list">
                        {}
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default UserInfo;