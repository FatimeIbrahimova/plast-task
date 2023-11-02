import React from "react";
import "./ProductsReceived.scss";
import { ReactComponent as SvgTriangle } from "./Imgs/Polygon 1.svg";

import Cards from "../../../components/Cards/Cards";
import { receivedProducts } from "../../../Data/Data";
import { useTranslation } from "react-i18next";

const ProductsReceived = () => {
	const { t } = useTranslation();
	return (
		<div className="second-section">
			<div className="second-section_title">
				<h2>
					{t("Biz")} <span>{t("alırıq")}</span>!
				</h2>
			</div>
			<div className="triangle">
				<SvgTriangle />
			</div>
			<Cards products={receivedProducts} />
		</div>
	);
};

export default ProductsReceived;
