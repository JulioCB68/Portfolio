import { StaticImageData } from "next/image";

import UnitedStates from "./flags/unitedStates.png";
import Brazil from "./flags/brazil.png";
import Spain from "./flags/spain.png";
import Italy from "./flags/italy.png";
import France from "./flags/france.png";

interface Language {
	name: string;
	value: string;
	flag: StaticImageData;
}

export const languages: Language[] = [
	{ name: "United States", value: "en-US", flag: UnitedStates },
	{ name: "Brazil", value: "pt-BR", flag: Brazil },
	{ name: "Spain", value: "es-ES", flag: Spain },
	{ name: "Italy", value: "it-IT", flag: Italy },
	{ name: "France", value: "fr-FR", flag: France },
];
