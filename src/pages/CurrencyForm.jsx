import { useContext } from 'react'
import AppContext from '../context/AppContext'
// CSS
import './css/currencyForm.css'

export const CurrencyForm = () => {
    const { currencyOption, fromCurrency, toCurrency, setFromCurrency, setToCurrency, amount, setAmount, result, convertCurrency  } = useContext(AppContext);

    return (
        <section>
            <div className="container">
                <form onSubmit={(e) => convertCurrency(e)}>
                    <div className="form-container">
                        <h1>Currency converter</h1>
                        {/* AMOUNT */}
                        <div className="input-container">
                            <label htmlFor="amout">Amount:</label>
                            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} id="amount" placeholder="Enter amount..." />
                        </div>

                        <div className="select-container">
                        {/* FROM CURRENCY OPTION*/}
                            <div className="select">
                                <label htmlFor="">From: </label>
                                <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                                    {currencyOption.map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                            {/* TO CURRENCY OPTION */}
                            <div className="select">
                                <label htmlFor="">To:</label>
                                <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                                    {currencyOption.map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <button type="submit">Convert</button>
                   
                        <div className="result-section">
                            <p>{amount} {fromCurrency} = {result} {toCurrency}</p>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}