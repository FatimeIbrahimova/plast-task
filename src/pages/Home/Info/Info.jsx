import React from "react";
import "./Info.scss";
import { ReactComponent as SvgTriangle } from "../ProductsReceived/Imgs/Polygon 1.svg";
import AboutInfo from "../../../components/AboutInfo/AboutInfo";
import { useTranslation } from "react-i18next";

const Info = () => {
	const { t } = useTranslation();
	return (
		<div className="info-section">
			<div className="info-section_title">
				<h2>
					{t("HAQQIMIZDA")} <span>{t("MƏLUMAT")}</span>.
				</h2>
			</div>
			<div className="triangle">
				<SvgTriangle />
			</div>
			<AboutInfo />
		</div>
	);
};

export default Info;
