import React, { useState } from "react";
import { ReactComponent as SvgRight } from "../../imgs/Frame (1).svg";
import "./SameSection.scss";
import { NavLink, useLocation } from "react-router-dom";
import { ourProducts } from "../../Data/Data";
import OurProducts from "../OurProducts/OurProducts";
import { useTranslation } from "react-i18next";

const SameSection = ({ title1, title2 }) => {
	const location = useLocation();
	const isSearchPage = location.pathname === "/search";
	//search
	const [value, setValue] = useState("");
	const [ setFilterSearch] = useState("hidden");
	const handleChange = (e) => {
		setValue(e.target.value);
		console.log(value);
	};
	const handleSearch = () => {
		setFilterSearch("visibe");
		console.log("click");
	};
	const { t } = useTranslation();
	return (
		<div className="same-section">
			<div className="same-section_hero-section">
				<div className="same-section_hero-section_background"></div>
				<div className="same-section_hero-section_content">
					<h1>{title1}</h1>
					<div className="same-section_hero-section_content-two">
						{isSearchPage ? (
							<>
								<input
									type="text"
									placeholder={t("Axtar_")}
									value={value}
									onChange={(e) => handleChange(e)}
								/>
								<i
									className="fa-solid fa-magnifying-glass"
									onClick={handleSearch}
								></i>
							</>
						) : (
							<>
								<NavLink to="/">Ana səhifə</NavLink>
								<SvgRight />
								<h2>{title2}</h2>
							</>
						)}
					</div>
				</div>
			</div>
			{value.trim().toLowerCase() !== "" && (
				<div className="search-results">
					<h2 className="value">
						"{value}" açar sözü üzrə axtarış nəticələri...
					</h2>
					<div className="products container">
						{ourProducts &&
							ourProducts
								.filter((data) => {
									return value.trim().toLowerCase() === ""
										? null
										: data.title.toLowerCase().includes(value.toLowerCase());
								})
								.map((data) => <OurProducts data={data} key={data.id} />)}
					</div>
				</div>
			)}
		</div>
	);
};

export default SameSection;
