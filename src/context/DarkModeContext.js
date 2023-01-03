import { useState, createContext, useContext } from "react";

const DarkModeContext = createContext();
export const useDarkModeContext = () => useContext(DarkModeContext);
const DarkModeProvider = (props) => {
    const[darkMode, setDarkMode] = useState(false); //Hook useState

    const toggleDarkMode = () => {
        setDarkMode(!darkMode); // Si darkmode es true, en cambio si es false se cambia a verdadero
        // console.log(darkMode);
        if(!darkMode){
            document.body.classList.add('darkMode');
        }else{
            document.body.classList.remove('darkMode');
        }
    }

    return (//Doble llave para retornar variable y funcion
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )
}

export {DarkModeContext, DarkModeProvider}