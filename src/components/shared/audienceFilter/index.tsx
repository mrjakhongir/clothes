import { audienceFilters } from '@/data/catalog'
import AudienceFilterItem from './AudienceFilterItem'

const AudienceFilters = () => {
	return (
		<ul className='flex items-center justify-between p-[2px] bg-bg rounded-[7px]'>
			{audienceFilters.map(item => (
				<AudienceFilterItem key={item.title} item={item} />
			))}
		</ul>
	)
}

export default AudienceFilters
