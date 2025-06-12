import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setSuccess(null);
            
        }

        try {
            setLoading(true);
            const response = await fetch("http://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
                
        });

            if (!response.ok) {
                const data = await response.json();
                setError(data.message || "Sign-up failed. Please try again.");
                setSuccess(null);

                
            } else {
                navigate("/verifyCode");
                setSuccess("Sign-up successful! Please verify your email.");
                setError(null);
                setEmail("");
                setPassword("");
                setConfirmPassword("");
            }
        } catch (err) {
            
            setError("Network error. Please try again later.");
            setSuccess(null);
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className="sign-up-form">
            <h2>Sign Up</h2>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label>Confirm Password:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up 
                {loading ? " Signing Up..." : ""}
                </button>
            </form>
        </div>
    );
};

export default SignUp;
