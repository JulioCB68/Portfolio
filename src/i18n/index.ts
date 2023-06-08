import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import enJson from "./translations/en.json";
import ptBRJson from "./translations/ptBR.json";
import esJson from "./translations/es.json";
import itJson from "./translations/it.json";
import frJson from "./translations/fr.json";

i18next.use(initReactI18next).init({
	fallbackLng: "en-US",
	interpolation: {
		escapeValue: false,
	},
	resources: {
		"en-US": enJson,
		"pt-BR": ptBRJson,
		"es-ES": esJson,
		"it-IT": itJson,
		"fr-FR": frJson,
	},
});

export default i18next;
