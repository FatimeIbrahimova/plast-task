import React, { useEffect } from "react";
import Form from "../../components/Form/Form";
import SameSection from "../../components/SameSection/SameSection";
import { useTranslation } from "react-i18next";

const Contact = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, []);
	const { t } = useTranslation();
	return (
		<div className="contact-page">
			<SameSection title1={t("ƏLAQƏ")} title2={t("ƏLAQƏ")} />
			<Form />
		</div>
	);
};

export default Contact;
