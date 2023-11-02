import React, { useContext } from "react";
import "./HeroSection.scss";
import { ReactComponent as SvgDown } from "./Imgs/Group 36209.svg";
import { useTranslation } from "react-i18next";
import Modal from "../../../components/Modal/Modal";
import { MainContext } from "../../../context/ContextProvider";

const HeroSection = () => {
	const { t } = useTranslation();
	const { isModalOpen, openModal, closeModal, setIsModalOpen } =
		useContext(MainContext);

	return (
		<div className="hero-section">
			<div className="hero-section_content">
				<h4>{t("Daha_gözəl_gələcək_üçün")}</h4>
				<h1>{t("TƏBİƏTƏ_ATMAYAQ")}!</h1>
				<button className="hero-section_content_button_btn">
					{t("Müraciət_et")}
				</button>

				<SvgDown className="svg" />
			</div>
			{isModalOpen && <Modal onClose={closeModal} />}
		</div>
	);
};

export default HeroSection;
