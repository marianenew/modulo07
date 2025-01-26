/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import LogoutModal from "../Forms/LogoutModal.jsx";
import { clearFormData } from "../../store/form/formSlice";

const Navigator = () => {
    const { username, email, password } = useSelector((state) => state.form.formData);
    const dispatch = useDispatch();
    const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

    // Función cierre de sesión
    const handleLogout = () => {
        dispatch(clearFormData()); 
        setLogoutModalOpen(false); 
    };

    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/counter" className="nav-link">Counter</Link>
                <Link to="/think" className="nav-link">Think</Link>
                <Link to="/products" className="nav-link">Product</Link>
                <Link to="/about" className="nav-link">About</Link>
            
            </div> 
            {password === "mod7USIP-MARIANE" && (
                <div className="nav-user-info">
                    <span className="nav-username">Bienvenido: {username} </span>
                    <span className="nav-email">{email}</span>
                    <button 
                        className="logout-btn" 
                        onClick={() => setLogoutModalOpen(true)}
                    >
                        Logout
                    </button>
                </div>
           
            )}
             
            {/* Mostrar el modal si isLogoutModalOpen es true */}
            {isLogoutModalOpen && (
                <LogoutModal 
                    onClose={() => setLogoutModalOpen(false)} 
                    onConfirm={handleLogout} 
                />
            )}
           
        </nav>
    );
};

export default Navigator;
