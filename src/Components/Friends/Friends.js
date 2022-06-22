import { useEffect, useState } from "react";
import Friend from "../Friend/Friend";
import "./Friends.css";

const Friends = () => {
    const [friends,setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setFriends(data))
    },[])

    return (
        <div className="friends-container">
            {
                friends.map(friend =><Friend friend={friend}></Friend> )
            }
        </div>
    );
};

export default Friends;