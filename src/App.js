import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [cartOpened, setCartOpened] = React.useState(false);

	React.useEffect(() => {
		fetch('https://62b5e0e06999cce2e8fb9332.mockapi.io/items')
			.then(res => {
				return res.json();
			})
			.then(json => {
				setItems(json);
			});
	}, []);

	const onAddToCart = obj => {
		setCartItems(prev => [...prev, obj]);
	};

	return (
		<div className='wrapper clear'>
			{cartOpened && <Drawer cartItems={cartItems} onClose={() => setCartOpened(false)} />}
			<Header onClickCart={() => setCartOpened(true)} />
			<div className='content p-40'>
				<div className='d-flex align-center justify-between mb-40'>
					<h1>Все товары</h1>
					<div className='search-block d-flex'>
						<img src='/img/search.svg' alt='Search' />
						<input placeholder='Поиск...' />
					</div>
				</div>

				<div className='d-flex flex-wrap'>
					{items.map((item, index) => (
						<Card
							key={index}
							title={item.title}
							imageUrl={item.imageUrl}
							price={item.price}
							onFavorite={() => console.log('Добавили в закладки')}
							onPlus={obj => onAddToCart(obj)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
