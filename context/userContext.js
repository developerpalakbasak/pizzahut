"use client";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    
    
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
  
    // fetch all pizza
    const fetchLoggedinUser = async () => {
      try {
        const res = await axios.get("/api/user");
        console.log(res.status)

        if(res.status == 200){
          setUser(res.data.user); // Access response data directly

        }
      } catch (error) {
        console.log(error.response.status)
        // console.error(error.message);
        setUser([])

      } finally {
        setLoading(false);
      }
    };
  
  
    useEffect(() => {
  
      fetchLoggedinUser();
  
    }, []);

      // Handle logout
      const handleClick = async (e) => {
        try {
          const res = await axios.get("/api/user/logout", {
            headers: { "Content-Type": "application/json" },
          });
          // On successful logout, redirect the user to the homepage or login page
          if (res.data.success) {
            router.push('/login');  // Redirect to login page after logout
          }
        } catch (error) {
          console.error("Error logging out:", error);
        }
      };
    
  



    return (
        <UserContext.Provider
            value={{ user, loading, handleClick }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
