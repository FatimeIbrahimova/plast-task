import React, { useEffect } from "react";
import SameSection from "../../components/SameSection/SameSection";
import OurProducts from "../../components/OurProducts/OurProducts";
import { useTranslation } from "react-i18next";

const Products = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, []);
	const { t } = useTranslation();
	return (
		<div className="products-page">
			<SameSection title1={t("MƏHSULLARIMIZ")} title2={t("MƏHSULLARIMIZ")} />
			<div className="products">
				<div className="products-container">
					<OurProducts />
				</div>
			</div>
		</div>
	);
};

export default Products;
