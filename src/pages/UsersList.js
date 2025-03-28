import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/usersList.css";

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, [page]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
            setUsers(response.data.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://reqres.in/api/users/${id}`);
            setUsers(users.filter(user => user.id !== id));
            alert("User  deleted successfully!");
        } catch (error) {
            alert("Failed to delete user.");
        }
    };

    return (
        <div>
            <h2>User List</h2>
            <div className="user-list">
                {users.map((user) => (
                    <div className="user-card" key={user.id}>
                        <img src={user.avatar} alt={user.first_name} width="100" />
                        <h3>{user.first_name} {user.last_name}</h3>
                        <button onClick={() => navigate(`/edit-user/${user.id}`, { state: user })}>Edit</button>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
                <button onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    );
};

export default UsersList;