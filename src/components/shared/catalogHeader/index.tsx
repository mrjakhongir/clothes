import SearchInput from '../../ui/SearchInput'
import Container from '../Container'
import AudienceFilters from '../audienceFilter'
import PageTitle from '../pageTitle/PageTitle'

const CatalogHeader = () => {
	return (
		<header className='pt-1.5 mb-5'>
			<Container className='flex flex-col gap-2'>
				<PageTitle content='Каталог' className='mb-2' />
				<SearchInput />
				<AudienceFilters />
			</Container>
		</header>
	)
}

export default CatalogHeader
