import { createContext, useState, useEffect } from "react";
import { useSearchParams  } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const LangContext = createContext({})

export const LangProvider = ({ children }) => {


    const [searchParams, setSearchParams] = useSearchParams();
    const [language, setLanguage] = useState(searchParams.get('lang') || 'el');
    




    useEffect( () => {
        setSearchParams({lang: language})
        // document.documentElement.lang = language;
    }, [language])


    let contextData = {
        lang: language,
        setLanguage: setLanguage,
    }

    return (
         <LangContext.Provider value={contextData}>
            {children}
         </LangContext.Provider>
    )
}

export default LangContext;