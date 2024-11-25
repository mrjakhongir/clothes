import { CatalogFilterItem } from '@/types/catalog'
import Image from 'next/image'

type AccordionLabelProps = {
	item: CatalogFilterItem
	openAccordion: boolean
	setOpenAccordion: React.Dispatch<React.SetStateAction<boolean>>
}

const AccordionLabel: React.FC<AccordionLabelProps> = ({
	item,
	openAccordion,
	setOpenAccordion,
}) => {
	const openAccordionBody = () => {
		setOpenAccordion(!openAccordion)
	}
	return (
		<div className='flex items-center gap-[10px]' onClick={openAccordionBody}>
			<Image src={item.img} width={20} height={20} alt={item.title} />
			<div className='flex-1 flex items-center justify-between py-3 border-b-[0.25px] border-b-[#7e7f83b2] group-last:border-b-transparent'>
				<span className='text-[15px] leading-[18px] -tracking-[0.15px] select-none'>
					{item.title}
				</span>
				<Image
					src='/icons/catalog/angle-right.svg'
					width={5}
					height={10}
					alt='arrow'
					className={`transition-all duration-150 ${
						openAccordion && 'rotate-90'
					}`}
				/>
			</div>
		</div>
	)
}

export default AccordionLabel
