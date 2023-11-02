import React, { useEffect } from "react";
import AboutInfo from "../../components/AboutInfo/AboutInfo";
import InfoImg from "../../imgs/Rectangle 420 (1).png";
import SameSection from "../../components/SameSection/SameSection";
import "./About.scss";
import { useTranslation } from "react-i18next";

const About = () => {
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
			<SameSection title1={t("Haqqimizda_melumat")} title2={t("HAQQIMIZDA")} />
			<div className="about-page_info">
				<AboutInfo />
				<div className="about-page_info-section_container">
					<div className="about-page_info-section_container_context">
						<h3>Nə işlə məşğul oluruq</h3>
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
							adipiscing pellentesque euismod ut pharetra. Tortor, nibh orci,
							sed in sed sed dictum tristique. Turpis laoreet euismod nisi
							viverra. Pretium id massa adipiscing pellentesque euismod ut
							pharetra.{" "}
						</p>
					</div>
					<div className="about-page_info-section_container_img">
						<img src={InfoImg} alt="img" />
						<div className="authorr">
							<p>
								Tortor, nibh orci, sed in sed sed dictum tristique. Turpis
								laoreet euismod nisi viverra. Pretium id massa adipiscing
								pellentesque euismod ut pharetra.
							</p>
							<h1>- Anton Çexov</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
