import { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
// CSS
import './css/currencyList.css';

export const CurrencyList = () => {
	const { conversionData } = useContext(AppContext);
    const [ srednjiTecaj, setSrednjiTecaj ] = useState([]);
    const [ prodajniTecaj, setProdajniTecaj ] = useState([]);
    const [ kupovniTecaj, setKupovniTecaj ] = useState([]);

    useEffect(() => {
        // Get Srednji Tecaj
        const kupovniTecajArr = Object.values(conversionData).map(val => {
            const sum = val * (1 + 0.02);

            return +sum.toFixed(6);
        })

        // Get Prodajni Tecaj
        const prodajniTecajArr = Object.values(conversionData).map(val => {
            const sum = val * (1 - 0.03);

            return +sum.toFixed(6)
        })

        // Get Srednji Tecaj
        const srednjiTecajArr = Object.values(conversionData).map((val, index) => {
            const sum = (kupovniTecaj[index] + prodajniTecaj[index] ) / 2;

            return sum ? +sum.toFixed(6) : 0;
        }) 

        setKupovniTecaj(kupovniTecajArr.sort((x, y) => x - y))
        setProdajniTecaj(prodajniTecajArr.sort((x, y) => x - y))
        setSrednjiTecaj(srednjiTecajArr.sort((x, y) => x - y))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [conversionData])

	return (
		<section>
			<div className="container">
				<div className="list-section">
					<ul className="list-head">
						<li>Oznaka valute</li>
						<li>Tečaj</li>
						<li>Srednji tečaj</li>
						<li>Kupovni tečaj</li>
						<li>Prodajni tečaj</li>
					</ul>
					<div className="list">
						<ul>{Object.keys(conversionData).map((itemKey, index) => <li key={index}>{itemKey}</li>)}</ul>
						<ul>
							{Object.values(conversionData).map((itemValues, index) => (
								<li key={index}>{itemValues}</li>
							))}
						</ul>
						<ul>{srednjiTecaj.map((itemValues, index) => <li key={index}>{itemValues}</li>)}</ul>
						<ul>{prodajniTecaj.map((itemValues, index) => <li key={index}>{itemValues}</li>)}</ul>
						<ul>{prodajniTecaj.map((itemValues, index) => <li key={index}>{itemValues}</li>)}</ul>
					</div>
				</div>
			</div>
		</section>
	);
};
