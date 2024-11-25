export interface AudienceFilterItemI {
	title: string
	path: string
}

export interface CatalogFilterItem {
	id: number
	title: string
	img: string
	options: OptionI[]
}

export interface OptionI {
	id: number
	title: string
}

export interface CatalogMenuItem {
	id: number
	title: string
	text: string
	img: string
}
