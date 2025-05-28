import { useState } from "react";
const VerifyCode = () => {
    const [code, setCode] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const response = await fetch("http://localhost:5000/api/auth/verifyCode", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code }),
            });

            if (!response.ok) {
                const data = await response.json();
                setError(data.message || "Verification failed.");
                setSuccess(null);
            } else {
                setSuccess("Verification successful! You can now sign in.");
                setError(null);
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
            <h2>Verify Code</h2>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <form onSubmit={handleSubmit}>
                <label>Verification Code:</label>
                <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? "Verifying..." : "Verify Code"}
                </button>
            </form>
        </div>
    );
}

export default VerifyCode;