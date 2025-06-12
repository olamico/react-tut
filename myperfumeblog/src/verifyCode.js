import { useState } from "react";

const VerifyCode = () => {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await fetch("http://localhost:5000/api/auth/verifyCode", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, Code: code }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Verification failed.");
                setSuccess(null);
            } else {
                setSuccess(data.message || "Verification successful!");
                setError(null);
                setEmail("");
                setCode("");
            }
        } catch (err) {
            setError("Network error. Please try again later.");
            setSuccess(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="verify-code-form">
            <h2>Verify Your Email</h2>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <form onSubmit={handleSubmit}>
                <label>Email Address:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Verification Code:</label>
                <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? "Verifying..." : "Verify"}
                </button>
            </form>
        </div>
    );
};

export default VerifyCode;
