import React from "react";
import SameSection from "../../components/SameSection/SameSection";
import { useTranslation } from "react-i18next";

const Search = () => {
	const { t } = useTranslation();
	return (
		<div className="search-page">
			<SameSection title1={t("Axtar_")} />
		</div>
	);
};

export default Search;
