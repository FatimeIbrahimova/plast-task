import React from "react";
import "./ContactUs.scss";
import Form from "../../../components/Form/Form";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
	const { t } = useTranslation();
	return (
		<div className="contact-section">
			<div className="contact-section_title">
				<h2>
					{t("BİZİMLƏ")} <span>{t("ƏLAQƏ")}</span>.
				</h2>
			</div>
			<Form />
		</div>
	);
};

export default ContactUs;
