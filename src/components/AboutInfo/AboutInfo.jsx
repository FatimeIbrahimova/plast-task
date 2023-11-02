import React from "react";
import "./AboutInfo.scss";
import InfoImg from "../../imgs/Rectangle 420.png";
import { ReactComponent as InfoSvg } from "../../imgs/triangle.svg";
import { useTranslation } from "react-i18next";

const AboutInfo = () => {
	const { t } = useTranslation();
	return (
		<div>
			<div className="info-section_container">
				<div className="info-section_container_img">
					<img src={InfoImg} alt="img" />
					<InfoSvg className="author-svg" />
					<div className="author">
						<p>
							Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet
							euismod nisi viverra. Pretium id massa adipiscing pellentesque
							euismod ut pharetra.
						</p>
						<h1>- {t("Author")}</h1>
					</div>
				</div>

				<div className="info-section_container_context">
					<h3>{t("Biz_kimik")}</h3>
					<span>?</span>
					<p>
						Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet
						euismod nisi viverra. Pretium id massa adipiscing pellentesque
						euismod ut pharetra. Tortor, nibh orci, sed in sed sed dictum
						tristique. Turpis laoreet euismod nisi viverra. Pretium id massa
						adipiscing pellentesque euismod ut pharetra.{" "}
					</p>
					<p className="p">
						Tortor, nibh orci, sed in sed sed dictum tristique. Turpis laoreet
						euismod nisi viverra. Pretium id massa adipiscing pellentesque
						euismod ut pharetra. Tortor, nibh orci, sed in sed sed dictum
						tristique. Turpis laoreet euismod nisi viverra. Pretium id massa
						adipiscing pellentesque euismod ut pharetra. Tortor, nibh orci, sed
						in sed sed dictum tristique. Turpis laoreet euismod nisi viverra.
						Pretium id massa adipiscing pellentesque euismod ut pharetra.{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutInfo;
