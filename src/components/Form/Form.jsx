import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import "./Form.scss";

const Form = () => {
	const [upName, setUpName] = useState(false);
	const [upNumber, setUpNumber] = useState(false);
	const [upText, setUpText] = useState(false);
	const [arr, setArr] = useState([]);
	const [data, setData] = useState({
		fullName: "",
		mobilePhone: null,
		message: null,
	});
	const handleClickUpName = () => {
		setUpName(true);
		if (data.mobilePhone == null) {
			setUpNumber(false);
		} else {
			setUpNumber(true);
		}

		if (data.message == null) {
			setUpText(false);
		} else {
			setUpText(true);
		}
	};
	const handleClickUpNumber = () => {
		setUpNumber(true);
		if (data.fullName == "") {
			setUpName(false);
		} else {
			setUpName(true);
		}

		if (data.message == null) {
			setUpText(false);
		} else {
			setUpText(true);
		}
	};
	const handleClickUpText = () => {
		setUpText(true);
		if (data.fullName == "") {
			setUpName(false);
		} else {
			setUpName(true);
		}

		if (data.mobilePhone == null) {
			setUpNumber(false);
		} else {
			setUpNumber(true);
		}
	};
	//mousedown
	const nameInputRef = useRef(null);
	const numberInputRef = useRef(null);
	const textInputRef = useRef(null);

	const handleClickOutside = (e) => {
		if (
			nameInputRef.current &&
			!nameInputRef.current.contains(e.target) &&
			numberInputRef.current &&
			!numberInputRef.current.contains(e.target) &&
			textInputRef.current &&
			!textInputRef.current.contains(e.target)
		) {
			setUpName(false);
			setUpNumber(false);
			setUpText(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	//localStorage
	const handleChange = (e) => {
		e.preventDefault();
		setData({ ...data, [e.target.name]: e.target.value });
	};
	const handleSubmit = () => {
		console.log(data);
		arr.push(data);
		const jsonData = JSON.stringify(arr);
		localStorage.setItem("userData", jsonData);
		setData({
			fullName: "",
			mobilePhone: "",
			message: "",
		});
		setUpName(false);
		setUpNumber(false);
		setUpText(false);
	};
	//css
	const location = useLocation();
	const contactFormClassName = {
		backgroundColor: location.pathname === "/" ? "black" : "#F8F8F7",
		border: location.pathname === "/" ? "" : "1px solid #AEAEAE",
		color: location.pathname === "/" ? "" : "#AEAEAE",
	};

	const labelClassName = {
		color: location.pathname === "/" ? "" : "#AEAEAE",
		backgroundColor: location.pathname === "/" ? "" : "white",
	};

	const { t } = useTranslation();

	return (
		<div>
			<div className="contact-section_formpart" style={contactFormClassName}>
				<div className="contact-section_formpart-container">
					<div onClick={() => handleClickUpName()} className="name">
						<label
							className={`label ${upName ? "active" : ""}`}
							style={labelClassName}
						>
							{t("Ad_və_soyad")}
						</label>
						<br />
						<input
							type="text"
							placeholder=""
							className={` ${upName ? "border" : ""}`}
							name="fullName"
							onChange={(e) => handleChange(e)}
							value={data.fullName}
							// autocomplete="off"
							ref={nameInputRef}
							style={contactFormClassName}
						/>
					</div>
					<div className="number" onClick={() => handleClickUpNumber()}>
						<label
							className={`label ${upNumber ? "active" : ""}`}
							style={labelClassName}
						>
							{t("Mobil_nömrə")}
						</label>
						<br />
						<input
							type="text"
							placeholder=""
							className={` ${upNumber ? "border" : ""}`}
							name="mobilePhone"
							onChange={(e) => handleChange(e)}
							value={data.mobilePhone}
							// autocomplete="off"
							ref={numberInputRef}
							style={contactFormClassName}
						/>
					</div>
					<div className="textfield" onClick={() => handleClickUpText()}>
						<label
							className={`textfield-label ${upText ? "active-label" : ""}`}
							style={labelClassName}
						>
							{t("Mesajınız")}...
						</label>
						<br />
						<input
							type="text"
							placeholder=""
							className={` ${upText ? "border" : ""}`}
							name="message"
							onChange={(e) => handleChange(e)}
							value={data.message}
							ref={textInputRef}
							style={contactFormClassName}
						/>
					</div>
					<div></div>
					{/* <button className="submit-btn" onClick={() => handleSubmit()}>
						{t("Göndər_")}
					</button> */}
				</div>

				<div>
					<button className="submit-btn" onClick={() => handleSubmit()}>
						{t("Göndər_")}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Form;
