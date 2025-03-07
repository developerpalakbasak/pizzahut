"use client"
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function Register() {


    const router = useRouter();

    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const data = {
        fullName,
        email,
        password
    }


    const handleEmailSignUp = async (e) => {
        e.preventDefault();

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email format');
            return;
        }
        if (password.length < 4) {
            alert('Passwords must be 4 charecter');
            return;
        }
        if (fullName.length < 4) {
            alert('Full Name must be 4 charecter');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }


        // console.log('Registering with:', fullName, email, password);

        try {
            const res = await axios.post("/api/user/register", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })

            console.log(res.data)

            toast.success(res.data.message)
            if (res.data.success) {
                router.push("/login"); 
            }


        } catch (error) {
            console.log(error.response.data)
            toast.error(error.response.data.message)
            if (!error.response.data.success) {
                router.push("/login"); 
            }

        } 


    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full text-center">
                <h2 className="text-2xl font-bold mb-4">Register</h2>
                <form onSubmit={handleEmailSignUp} className="mb-4">
                    <input
                        type="text"
                        placeholder="Enter Your Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full p-2 border rounded-lg mb-2"
                        required
                    />
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
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-2 border rounded-lg mb-2"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                    >
                        Register with Email
                    </button>
                </form>
              

            </div>
        </div>
    );
}