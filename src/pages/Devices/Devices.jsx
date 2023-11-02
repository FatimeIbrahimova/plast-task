import React, { useEffect } from "react";
import Cards from "../../components/Cards/Cards";
import { devices } from "../../Data/Data";
import SameSection from "../../components/SameSection/SameSection";
import { useTranslation } from "react-i18next";

const Devices = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, []);
	const { t } = useTranslation();
	return (
		<div className="about-page">
			<SameSection title1={t("CİHAZLAR")} title2={t("CİHAZLAR")} />
			<Cards products={devices} />
		</div>
	);
};

export default Devices;
