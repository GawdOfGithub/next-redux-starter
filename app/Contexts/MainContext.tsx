'use client'
import  { createContext } from 'react';
import { useState } from 'react';
type MainContextType={
  theme:boolean,
  setTheme:React.Dispatch<React.SetStateAction<boolean>>
  toggleSidebar:boolean,
  setToggleSidebar:React.Dispatch<React.SetStateAction<boolean>>

}
const MainContext = createContext<MainContextType | undefined>(undefined);


export default function MainContextProvider({ children }) {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [theme, setTheme] = useState(true);
    


  return (
    <MainContext.Provider value={{
        toggleSidebar,setToggleSidebar,theme,setTheme
    
    }}>
      {children}
    </MainContext.Provider>
  );
}

export {MainContext}