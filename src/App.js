import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<ProductContext.Provider value={cart}>
				<CartContext.Provider value={cart}>
				<Navigation />
				</CartContext.Provider>
			</ProductContext.Provider>

			{/* Routes */}
			<ProductContext.Provider value={{products, addItem}}>
				<CartContext.Provider value={cart}>
					<Route
						exact
						path="/"
						component={Products}/>
				</CartContext.Provider>
			</ProductContext.Provider>

			<ProductContext.Provider value={{products, addItem}}>
				<CartContext.Provider value={cart}>
					<Route
						path="/cart"
						component={ShoppingCart}/>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
