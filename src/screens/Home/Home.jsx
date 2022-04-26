import { Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { logIn, signUp } from "../../services/firebase";

export const Home = ({ onAuth, isSignUp }) => {
    const [error, setError] = useState("");
    
    const handleSubmit = async ({ login, pass }) => {
        try {
            if (isSignUp) {
                await signUp(login, pass);
            } else {
                await logIn(login, pass);
            }
        } catch (error) {
            setError(error.message);
            console.log(error);
        }
    };

    useEffect(() => {
        setError("");
    }, [isSignUp]);

    return (
        <>
            <h4>Home page</h4>
            <LoginForm onSubmit={handleSubmit} />
            {error && <Alert severity="error">{error}</Alert>}
            <Link to={isSignUp ? "/" : "/signup"}>
                {isSignUp ? "Login" : "Sign up"}
            </Link>
        </>
    );
};