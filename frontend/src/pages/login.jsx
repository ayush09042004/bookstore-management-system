import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send login data to backend
            const response = await axios.post("https://srv-d3t82g9bh1hs73a9g6m0/api/v1/auth/login", {
                email,
                password
            });

            // Save JWT token in browser storage
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("name", response.data.name);
            localStorage.setItem("role", response.data.role);

            alert("Login successful!");
            navigate("/"); // go to home page
        } catch (err) {
            console.log(err);
            alert(err.response?.data?.message || "Invalid credentials");
        }
    };

    return (
        <div className="Auth-Page">
            <div className="auth-card">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
