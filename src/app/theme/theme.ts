import { dark_properties } from './dark';
import { light_properties } from './light';
export interface Theme {
	name: string;
	properties: any;
}

export const dark: Theme = {
	name: 'dark',
	properties: dark_properties,
};

export const light: Theme = {
	name: 'light',
	properties: light_properties,
};
