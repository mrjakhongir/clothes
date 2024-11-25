import { CatalogFilterItem } from '@/types/catalog'

type AccordionBodyProps = {
	item: CatalogFilterItem
	openAccordion: boolean
}

const AccordionBody: React.FC<AccordionBodyProps> = ({
	item,
	openAccordion,
}) => {
	return (
		<ul
			className={`pl-8 flex-col gap-1.5 h-0  overflow-hidden transition-all duration-300 ${
				openAccordion && 'h-auto py-1'
			}`}
		>
			{item.options.map(option => (
				<li key={option.id} className='text-slate-600'>
					{option.title}
				</li>
			))}
		</ul>
	)
}

export default AccordionBody
