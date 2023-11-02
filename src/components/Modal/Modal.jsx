import React, { useContext, useEffect, useState } from "react";
import "./Modal.scss";
import { devices, ourProducts, receivedProducts } from "../../Data/Data";
import { MainContext } from "../../context/ContextProvider";

const Modal = () => {
	const { closeModal,selectedProductId,selectedProductId2,selectedProductId3} = useContext(MainContext);

	const [data, setData] = useState({
		fullName: "",
		category: "",
		weight: null,
		mobilePhone: null,
	});
	const [arr, setArr] = useState([]);

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
		console.log(data);
	};
	const handleSubmit = () => {
		console.log(data);
		const newData = { ...data, category: selectedProduct?.title || selectedProduct2?.title || selectedProduct3?.title };
		arr.push(newData);
		const jsonData = JSON.stringify(arr);
		localStorage.setItem("applyData", jsonData);
		setData({
			fullName: "",
			category: "",
			weight: "",
			mobilePhone: "",
		});
		// closeModal()
	};

	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	const selectedProduct = receivedProducts.find((item) => item.id === selectedProductId);
	console.log(selectedProduct);

	const selectedProduct2 = ourProducts.find((item) => item.id === selectedProductId2);
	console.log(selectedProduct2);

	const selectedProduct3 = devices.find((item) => item.id === selectedProductId3);
	console.log(selectedProduct2);
	return (
		<div className="modal-overlay">
			<div className="modal">
				<button className="close-button" onClick={closeModal}>
					x
				</button>
				<div className="modal-inner">
					<h2>Müraciət et</h2>
					<select
						className="input"
						name="category"
						onChange={(e) => handleChange(e)}
						value={data.category}
					>
						<option value="" disabled selected hidden className="placeholder">
							{selectedProduct && (
								<span>{selectedProduct.title}</span>
							)}
							{selectedProduct2 && (
								<span>{selectedProduct2.title}</span>
							)}
							{selectedProduct3 && (
								<span>{selectedProduct3.title}</span>
							)}
							
						</option>
					</select>
					<input
						type="text"
						placeholder="Çəkisi"
						className="input"
						name="weight"
						onChange={(e) => handleChange(e)}
						value={data.weight}
					/>
					<input
						type="text"
						placeholder="Ad və soyad"
						className="input"
						name="fullName"
						onChange={(e) => handleChange(e)}
						value={data.fullName}
					/>
					<input
						type="text"
						placeholder="Əlaqə nömrəniz"
						className="input"
						name="mobilePhone"
						onChange={(e) => handleChange(e)}
						value={data.mobilePhone}
					/>
					<button onClick={() => handleSubmit()}>Müraciət et</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
