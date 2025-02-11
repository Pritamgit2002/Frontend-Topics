import { useEffect, useState } from "react";

interface User{
    id: string;
    name: string;
    email: string;
}

export function useAuth(){
    const[user, setUser] = useState<User | null>(null);
    const[token, setToken] = useState<string | null>(null);
    const[loading, setLoading] = useState<boolean>(true);


    useEffect(()=>{
        const storedToken = localStorage.getItem("authToken");
        const storedUser = localStorage.getItem("authUser");

        if(storedToken && storedUser){
            setToken(storedToken)
            setUser(JSON.parse(storedUser))
        }
        setLoading(false)
    },[])


    const login = async(email: string, password:string) => {
        setLoading(true)
        try {
            const response = await fetch("/api/login",{
                method: "POST",
                body: JSON.stringify({email:password}),
                headers:{"Content-type": "application/json"}
            })

            if(!response.ok){
                throw new Error("Invalid credentials")
            }

            const {token, user} = await response.json();

            localStorage.setItem("authToken", token)
            localStorage.setItem("authUser", JSON.stringify(user))

            setToken(token);
            setUser(user);

        } catch (error) {
            console.error("Login failed", (error as Error).message);
        }
        finally{
            setLoading(false)
        }
    }

    const logout = () =>{
        localStorage.removeItem("authToken");
        localStorage.removeItem("authUser");
        setToken(null);
        setUser(null)
    }

    return {user, token, loading, login, logout}
}