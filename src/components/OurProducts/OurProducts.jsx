import React, { useContext } from "react";
import "./OurProducts.scss";
import { ourProducts } from "../../Data/Data";
import { useLocation } from "react-router-dom";
import { MainContext } from "../../context/ContextProvider";
import Modal from "../Modal/Modal";

const OurProducts = ({ data, itemCorousel }) => {
	const { isModalOpen, openModal, closeModal,selectedProductId} = useContext(MainContext);
	const location = useLocation();
	const isSearchPage = location.pathname === "/search";
	const isCorouselPage = location.pathname === "/";
	const isProductsPage = location.pathname === "/products";

	
	return (
		<>
			{isSearchPage && (
				<>
					<div className="products-container_card">
						{data.img}
						<h2>{data.title}</h2>
						<p>{data.text}</p>
					</div>
				</>
			)}

			{isProductsPage && (
				<>
					{ourProducts?.map((item) => (
						<div className="products-container_card" key={item.id}>
							{item.img}
							<h2>{item.title}</h2>
							<p>{item.text}</p>
							<button className="btn-apply" onClick={()=>openModal(item.id)}>
								Müraciət et
							</button>
							<span>{item.price}</span>
						</div>
					))}
					{isModalOpen && <Modal onClose={closeModal} />}
				</>
			)}

			{isCorouselPage && (
				<div className="products-container_card corousel">
					{itemCorousel.img}
					<h2>{itemCorousel.title}</h2>
					<p>{itemCorousel.text}</p>
					<button className="btn-apply" onClick={()=>openModal(itemCorousel.id)}>
						Müraciət et
					</button>
					<span>{itemCorousel.price}</span>
				</div>
			)}
		</>
	);
};

export default OurProducts;
