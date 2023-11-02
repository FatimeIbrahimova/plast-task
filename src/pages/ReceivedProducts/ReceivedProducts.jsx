import React, { useEffect } from "react";
import Cards from "../../components/Cards/Cards";
import { receivedProducts } from "../../Data/Data";
import SameSection from "../../components/SameSection/SameSection";
import { useTranslation } from "react-i18next";

const ReceivedProducts = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, []);
	const { t } = useTranslation();
	return (
		<div className="receivedProducts-page">
			<SameSection title1={t("ALIRIQ")} title2={t("ALIRIQ")} />
			<Cards products={receivedProducts} />
		</div>
	);
};

export default ReceivedProducts;
