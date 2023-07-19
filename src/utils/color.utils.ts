// MODULES
import { getLuminance, setLightness } from 'polished';

/**
 * Generate color for disabled inputs
 */
function disabled(color: string) {
	return setLightness(0.9, color);
}

/**
 * Generate adaptive color for use in elements whose background color may vary from dark to light
 */
function adaptiveColor(color: string) {
	return (getLuminance(color) > 0.9) ? 'black' : 'white';
}

export { disabled, adaptiveColor };
