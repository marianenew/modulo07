import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formData: {
        module: "React Mod7", // Valor fijo
        username: "",
        email: "",
        password: "mod7USIP-MARIANE", // Valor por defecto
    },
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        setFormData: (state, action) => {
            state.formData = {
                ...state.formData,
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password,
            };
        },
        clearFormData: (state) => {
            state.formData = {
                ...state.formData,
                username: "",
                email: "",
                password: "mod7USIP-MARIANE", // Valor por defecto
            };
        },
    },
});

export const { setFormData, clearFormData } = formSlice.actions;
export default formSlice.reducer;

