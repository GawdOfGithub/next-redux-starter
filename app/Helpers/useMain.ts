'use client'
import { useContext } from "react";
import { MainContext } from "../Contexts/MainContext";

export default function useMain() {
    const context = useContext(MainContext);
    if (!context) {
        throw new Error('useMainContext must be used within a MainContextProvider');
    }
    return context;
}