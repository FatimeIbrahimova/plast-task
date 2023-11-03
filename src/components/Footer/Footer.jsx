import React from "react";
import "./Footer.scss";
import { ReactComponent as Svg1 } from "./Svg/work (1) 1.svg";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const { pathname } = useLocation();
	const footerStyle = {
		backgroundColor: pathname === "/" ? "black" : "#F8F8F7",
		color: pathname === "/" ? "white" : "black",
	};
	const { t } = useTranslation();
	return (
		<div className="footer" style={footerStyle}>
			<div className="footer-container">
				<div className="footer-container_leftside">
					<Svg1 />
					<h3>{t("Fəaliyyətimiz_")}</h3>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 10,
							marginTop: 10,
						}}
					>
						<div className="line"></div>
						<h4>{t("MƏHSULLARIMIZ_")}</h4>
					</div>
					<h5>Biz alırıq</h5>
					<h5>Cihazlar</h5>
				</div>
				<div className="footer-container_middleside">
					<Svg1 />
					<h3>{t("Bizimlə_əlaqə")}</h3>
					<span>+994 12 222 22 22</span>
					<span>info@plast.az</span>
					<ul>
						<li>
							<a href="https://www.facebook.com/">
								<i className="fa-brands fa-square-facebook"></i>
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/">
								<i className="fa-brands fa-instagram"></i>
							</a>
						</li>
						<li>
							<a href="https://www.youtube.com/">
								<i className="fa-brands fa-youtube"></i>
							</a>
						</li>
					</ul>
				</div>
				<div className="footer-container_rightside">
					<Svg1 />
					<h3>{t("Bizim_Məkan")}</h3>
					<p>{t("Place")}</p>
				</div>
			</div>
			<div className="footer-bottom" style={footerStyle}>
				<div className="footer-bottom_container">
					<div className="footer-bottom_container-leftside">
						<p style={footerStyle}>
							Copyright © 2021 <span style={footerStyle}>PLAST</span>.{" "}
							{t("Bütün_hüquqlar_qorunur")}.
						</p>
					</div>
					<div className="footer-bottom_container-rightside">
						<p style={footerStyle}>
							Developed by <span style={footerStyle}>Crocusoft LLC</span>.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
