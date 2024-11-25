import Accordion from '@/components/ui/accordion'
import { catalogFilters } from '@/data/catalog'
const CatalogFilters = () => {
	return (
		<div>
			{catalogFilters.map(item => (
				<Accordion key={item.id} item={item} />
			))}
		</div>
	)
}

export default CatalogFilters
