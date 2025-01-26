/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "motion/react";
import useForm from "../Hooks/useForm.js";
import ModalInfo from "../../Components/Modals/ModalInfo.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../../store/form/formSlice";

const FormWithMotionAndHook = ({ titleForm }) => {
    const dispatch = useDispatch();

    // Recuperar datos del estado global
    const { module, password: defaultPassword } = useSelector((state) => state.form.formData);

    // Hook para el formulario
    const { formData, handleChange, resetForm } = useForm({
        username: "",
        email: "",
        password: defaultPassword, // Inicialmente vacío
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalColor, setModalColor] = useState(""); // Para definir el color del modal

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password === defaultPassword) {
            // Contraseña correcta: guardar en el store y mostrar modal verde
            dispatch(setFormData(formData));
            setModalMessage(`Bienvenido: ${formData.username}`);
            setModalColor("green");
        } else {
            // Contraseña incorrecta: mostrar modal rosado
            setModalMessage("Username/Password incorrectos!!!");
            setModalColor("pink");
        }

        setShowModal(true);
    };

    const onCloseModalInfo = () => {
        setShowModal(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="form-container"
        >
            <ModalInfo
                visible={showModal}
                message={modalMessage}
                onClose={onCloseModalInfo}
                style={{ backgroundColor: modalColor }} // Cambia el color del modal
            />

            <form onSubmit={handleSubmit} className="form-content">
                <h3 className="form-title">{titleForm}</h3>

                <div className="form-group">
                    <label>Module:</label>
                    <input
                        type="text"
                        name="module"
                        value={module}
                        disabled
                        className="form-input"
                    />
                </div>

                {/* Username Field */}
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>

                {/* Email Field */}
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>

                {/* Password Field */}
                <div className="form-group password-group">
                    <label>Password:</label>
                    <div className="password-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="toggle-password"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>

                <button type="submit" className="form-submit">
                    Login
                </button>
            </form>
        </motion.div>
    );
};

export default FormWithMotionAndHook;
