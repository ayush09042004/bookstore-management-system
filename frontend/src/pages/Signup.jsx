import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make POST request to backend
            const response = await axios.post("http://localhost:3000/api/v1/auth/signup", {
                name,
                email,
                password,
                role
            });

            alert(response.data.message); // Show success message
            navigate("/login"); // Redirect to login page
        } catch (err) {
            console.log(err); // For debugging
            alert(err.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="Auth-Page">
            <div className="auth-card">
                <h2>Signup</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <select value={role} onChange={e => setRole(e.target.value)}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                    <button type="submit">Signup</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
