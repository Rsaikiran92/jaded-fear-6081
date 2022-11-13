import { createContext } from "react";


export const Appcontext=createContext();

function Appcontextprovider({children}){
    return(<Appcontext.Provider>{children}</Appcontext.Provider>)
}

export default Appcontextprovider