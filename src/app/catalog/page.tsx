import CatalogFilters from '@/components/shared/catalogFilters'
import CatalogMenu from '@/components/shared/catalogMenu'
import Container from '@/components/shared/Container'

const page = () => {
	return (
		<Container>
			<CatalogFilters />
			<CatalogMenu />
		</Container>
	)
}

export default page
