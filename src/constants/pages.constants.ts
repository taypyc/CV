// RESOURCES
import { TLanguage } from 'src/types/generic.types';

const title = '[CV] Serhii Avdieiev';

/**
 *  Object containing all the meta information about application pages
 *  Use cases:
 *  - consistent application routing
 *  - consistent application pages titling
 *  - automatic sitemap generation
 */
export const page = {
	home : {
		title,
		route : '/',
		isPublic : true,
	},

	// Placeholder for TBD pages
	placeholder : {
		title : 'Placeholder page',
		route : '#',
		isPublic : true,
	},

	cv : {
		frontend : {
			title,
			route : (language: TLanguage) => `/${language}/frontend`,
			isPublic : true,
		},
		magento : {
			title,
			route : (language: TLanguage) => `/${language}/magento`,
			isPublic : true,
		},
	},
} as const;
