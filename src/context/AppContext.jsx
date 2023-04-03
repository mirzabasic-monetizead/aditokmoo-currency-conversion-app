import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [ amount, setAmount ] = useState(1);
    const [ conversionData, setConversionData ] = useState([])
    const [ currencyOption, setCurrencyOption ] = useState([]);
    const [ fromCurrency, setFromCurrency ] = useState();
    const [ toCurrency, setToCurrency ] = useState();
    const [ result, setResult ] = useState(0);
    
    useEffect(() => {
        const api_url = `https://v6.exchangerate-api.com/v6/389b78060727a951d99c4a6d/latest/${fromCurrency ? fromCurrency : 'BAM'}`;
        
        fetchCurrencyData(api_url);
    }, [fromCurrency])

    const fetchCurrencyData =  async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        const dataKeys = Object.keys(data.conversion_rates).map(key => key);

        // Get Random currency
        const firstCurrency = Object.keys(data.conversion_rates)[Math.floor(Math.random() * 160)];
        // Add conversion rates data to state
        setConversionData(data.conversion_rates)
        // Add Currency option data
        setCurrencyOption(dataKeys)
        // Add From Currency data
        setFromCurrency(data.base_code)
        // Add To Currency data
        setToCurrency(firstCurrency)
    }
    
    const convertCurrency = (e) => {
        e.preventDefault();
        
        const result = amount * conversionData[toCurrency];
        
        setResult(result.toFixed(2));
    }

    return (
        <AppContext.Provider value={{
            amount,
            currencyOption,
            conversionData,
            fromCurrency,
            toCurrency,
            result,
            setAmount,
            convertCurrency,
            setFromCurrency,
            setToCurrency,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;