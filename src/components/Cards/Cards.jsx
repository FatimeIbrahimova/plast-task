import React, { useContext } from "react";
import "./Cards.scss";
import Modal from "../Modal/Modal";
import { MainContext } from "../../context/ContextProvider";
import { useLocation } from "react-router-dom";
import { devices } from "../../Data/Data";

const Cards = ({ products }) => {
	const { isModalOpen, openModal, closeModal } = useContext(MainContext);
	const location = useLocation();
	const isDevicesPage = location.pathname === "/devices";
	const isHomePage = location.pathname === "/";
    const isBuyPage=location.pathname === "/receivedProducts"
	return (
		<div>
			<div className="received-products">
				<div className="received-products-container">
					{isHomePage && (
						products?.map((item) => (
							<div className="received-products-container_card" key={item.id}>
								<div className="received-products-container_card-inner">
									{item.img}
									<div className="price">
										<span>{item.price}</span>
									</div>
									<h2>{item.title}</h2>
									<p>{item.text}</p>
									<div className="received-products-container_card-inner_btns">
										<button className="btn-info">Ətraflı məlumat</button>
										<button className="btn-apply" onClick={()=>openModal(item.id)}>
											Müraciət et
										</button>
									</div>
								</div>
							</div>
						))
					)}
					{isBuyPage && (
						products?.map((item) => (
							<div className="received-products-container_card" key={item.id}>
								<div className="received-products-container_card-inner">
									{item.img}
									<div className="price">
										<span>{item.price}</span>
									</div>
									<h2>{item.title}</h2>
									<p>{item.text}</p>
									<div className="received-products-container_card-inner_btns">
										<button className="btn-info">Ətraflı məlumat</button>
										<button className="btn-apply" onClick={()=>openModal(item.id)}>
											Müraciət et
										</button>
									</div>
								</div>
							</div>
						))
					)}
					{isDevicesPage && (
						devices?.map((item) => (
							<div className="received-products-container_card" key={item.id}>
								<div className="received-products-container_card-inner">
									{item.img}
									<div className="price">
										<span>{item.price}</span>
									</div>
									<h2>{item.title}</h2>
									<p>{item.text}</p>
									<div className="received-products-container_card-inner_btns">
										<button className="btn-info">Ətraflı məlumat</button>
										<button className="btn-apply" onClick={()=>openModal(item.id)}>
											Müraciət et
										</button>
									</div>
								</div>
							</div>
						))
					)}
				</div>
				{isModalOpen && (
					<Modal
						onClose={closeModal} 
					/>
				)}
			</div>
		</div>
	);
};

export default Cards;
