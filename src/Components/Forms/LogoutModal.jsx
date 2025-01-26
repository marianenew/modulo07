/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const LogoutModal = ({ onClose, onConfirm }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>
                    X
                </button>
                <p>¿Estás seguro de que quieres cerrar sesión?</p>
                <button className="confirm-btn" onClick={onConfirm}>
                    Presiona para salir!!!
                </button>
            </div>
        </div>
    );
};

LogoutModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
};

export default LogoutModal;
