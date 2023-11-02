import React from "react";
import "./Navbar.scss";
import { ReactComponent as Svg } from "./Frame.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Navbar = () => {
	const [langsContainer, setLangsContainer] = useState(false);
	const [lang, setLang] = useState("");
	const [allLangs, setAllLangs] = useState([
		{ name: "Az", code: "az" },
		{ name: "En", code: "en" },
		{ name: "Ru", code: "ru" },
	]);
	const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
	const [menu_class, setMenuClass] = useState("menu hidden");
	const [isMenuClicked, setIsMenuClicked] = useState(false);
	const handleOpenOptions = () => {
		setLangsContainer(true);
	};
	const handleLangSelected = (item) => {
		i18next.changeLanguage(item.code);
		const langText = item.name;
		console.log(langText);
		setLangsContainer(false);
		setLang(langText);
	};
	//fixed navbar
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const navbarStyle = {
		backgroundColor: scrollY > 100 ? "black" : "",
		transition: "background-color 0.3s",
		borderBottom: scrollY > 100 ? "1px solid gray" : "",
	};
	//hamburger menu
	const updateMenu = () => {
		if (!isMenuClicked) {
			setBurgerClass("burger-bar clicked");
			setMenuClass("menu visible");
		} else {
			setBurgerClass("burger-bar unclicked");
			setMenuClass("menu hidden");
		}
		setIsMenuClicked(!isMenuClicked);
	};
	const linkClicked = () => {
		setMenuClass("menu hidden");
		setBurgerClass("burger-bar unclicked");
	};

	const { t } = useTranslation();
	return (
		<>
			<div className="nav" style={navbarStyle}>
				<div className="nav-container">
					<div className="nav-container_logo">
						<Svg />
					</div>
					<div className="nav-container_links">
						<ul>
							<NavLink to="/">
								<li className="list-style_no">{t("ANA_SƏHİFƏ")}</li>
							</NavLink>
							<div className="point"></div>
							<NavLink to="/receivedProducts">
								<li>{t("ALIRIQ")}</li>
							</NavLink>
							<div className="point"></div>
							<NavLink to="/products">
								<li>{t("MƏHSULLARIMIZ")}</li>
							</NavLink>
							<div className="point"></div>
							<NavLink to="/devices">
								<li>{t("CİHAZLAR")}</li>
							</NavLink>
							<div className="point"></div>
							<NavLink to="/about">
								<li>{t("HAQQIMIZDA")}</li>
							</NavLink>
							<div className="point"></div>
							<NavLink to="/contact">
								<li>{t("ƏLAQƏ")}</li>
							</NavLink>
						</ul>
					</div>
					<div className="nav-container_rightside">
						<ul>
							<NavLink to="/search">
								<li>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											cx="11.7666"
											cy="11.7666"
											r="8.98856"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M18.0183 18.4852L21.5423 22.0001"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</li>
							</NavLink>
							<li>
								<div className="lang" onClick={() => handleOpenOptions()}>
									<span>{lang ? lang : "Az"}</span>
								</div>
							</li>
						</ul>
						{langsContainer && (
							<div className="lang-choices">
								{allLangs?.map((item) => (
									<div
										className="lngs"
										onClick={() => handleLangSelected(item)}
										value={lang}
									>
										<span>{item.name}</span>
									</div>
								))}
							</div>
						)}
					</div>

					<div className="burger-div">
						<div className="burger-icon">
							<div className="burger-menu" onClick={updateMenu}>
								<div className={burger_class}></div>
								<div className={burger_class}></div>
								<div className={burger_class}></div>
							</div>
						</div>
					</div>
				</div>
				<div className={menu_class}>
					<div className="links">
						<ul>
							<NavLink to="/" onClick={linkClicked}>
								<li className="list-style_no">Ana səhİfə</li>
							</NavLink>
							<NavLink to="/receivedProducts" onClick={linkClicked}>
								<li>Alırıq</li>
							</NavLink>
							<NavLink to="/products" onClick={linkClicked}>
								<li>Məhsullarımız</li>
							</NavLink>
							<NavLink to="/devices" onClick={linkClicked}>
								<li>Cİhazlar</li>
							</NavLink>
							<NavLink to="/about" onClick={linkClicked}>
								<li>Haqqımızda</li>
							</NavLink>
							<NavLink to="/contact" onClick={linkClicked}>
								<li>Əlaqə</li>
							</NavLink>
							<NavLink to="/search" onClick={linkClicked}>
								<li>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											cx="11.7666"
											cy="11.7666"
											r="8.98856"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M18.0183 18.4852L21.5423 22.0001"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</li>
							</NavLink>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
