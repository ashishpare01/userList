import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/editUser.css";

const EditUser = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state || {};

    const [firstName, setFirstName] = useState(user.first_name);
    const [lastName, setLastName] = useState(user.last_name);
    const [email, setEmail] = useState(user.email || "");
    const [message, setMessage] = useState("");

    const handleUpdate = async () => {
        try {
            await axios.put(`https://reqres.in/api/users/${user.id}`, {
                first_name: firstName,
                last_name: lastName,
                email: email,
            });

            setMessage("User updated successfully!");
            setTimeout(() => navigate("/users"), 1000);
        } catch (error) {
            setMessage("Failed to update user.");
        }
    };

    return (
        <div>
            <h2>Edit User</h2>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handleUpdate}>Update</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default EditUser;