"use client";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false); // Track submission state

    const handleLogin = async (e) => {
        e.preventDefault();

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Invalid email format");
            return;
        }
        if (password.length < 4) {
            toast.error("Password must be at least 4 characters");
            return;
        }

        try {
            setLoading(true);
            const res = await axios.post("/api/user/login", { email, password }, {
                headers: { "Content-Type": "application/json" },
            });

            toast.success(res.data.message);
            
            // Redirect user after successful login
            setTimeout(() => {
                router.push("/");
            }, 1000);
        } catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full text-center">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form onSubmit={handleLogin} className="mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded-lg mb-2"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded-lg mb-2"
                        required
                    />
                    <button
                        type="submit"
                        className={`w-full py-2 px-4 rounded-lg text-white ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"}`}
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}
