'use client'
import { CatalogFilterItem } from '@/types/catalog'
import { useState } from 'react'
import AccordionBody from './AccordionBody'
import AccordionLabel from './AccordionLabel'

type AccordionProps = {
	item: CatalogFilterItem
}

const Accordion: React.FC<AccordionProps> = ({ item }) => {
	const [openAccordion, setOpenAccordion] = useState(false)
	return (
		<div className='group'>
			<AccordionLabel
				item={item}
				openAccordion={openAccordion}
				setOpenAccordion={setOpenAccordion}
			/>
			<AccordionBody item={item} openAccordion={openAccordion} />
		</div>
	)
}

export default Accordion
