import React, {useState} from "react";
import i18n from '../i18n';
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
    const {t}=useTranslation()
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

    const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        setSelectedLanguage(e.target.value);
    }

    return (
        <div className="select">
            <select defaultValue={selectedLanguage} onChange={chooseLanguage}>  
                <option value="en">{t("English")}</option>
                <option value="ru">{t("Russian")}</option>
                <option value="zh">{t("Chinese")}</option>
            </select>
        </div>
    );
};

export default LanguageSelector;