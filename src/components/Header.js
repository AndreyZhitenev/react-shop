import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const Header = (props) => {
	const { totalPrice } = useCart();
	const [width, setWidth] = useState(4000);

	React.useEffect(() => {
		setWidth(document.querySelector("html").clientWidth);
	}, []);

	return (
		<header
			className={
				width > 640
					? `d-flex justify-between align-center p-40`
					: `d-flex flex-column pl-40 pt-30 pb-30`
			}>
			<Link to={process.env.PUBLIC_URL + "/"}>
				<div className={width > 640 ? "d-flex align-center" : "d-flex align-center mb-20"}>
					<img width={40} height={40} src="img/logo.svg" alt="logo" />
					<div className="headerInfo">
						<h3 className="text-uppercase">React Shop</h3>
						<p className="opacity-5">Магазин на React</p>
					</div>
				</div>
			</Link>
			<ul className="d-flex">
				<li onClick={props.onClickCart} className="mr-30 cu-p">
					<img width={18} height={18} src="img/cart.svg" alt="Корзина" />
					<span>{totalPrice} руб.</span>
				</li>
				<li className="mr-20 cu-p">
					<Link to={process.env.PUBLIC_URL + "/favorites"}>
						<img width={18} height={18} src="img/heart.svg" alt="Закладки" />
					</Link>
				</li>
				<li>
					<Link to={process.env.PUBLIC_URL + "/orders"}>
						<img width={18} height={18} src="img/user.svg" alt="Заказы" />
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
