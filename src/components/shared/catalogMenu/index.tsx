import { catalogMenu } from '@/data/catalog'
import MenuItem from './MenuItem'

const CatalogMenu = () => {
	return (
		<section className='flex flex-col gap-[10px] mt-2'>
			{catalogMenu.map(menu => (
				<MenuItem key={menu.title} menu={menu} />
			))}
		</section>
	)
}

export default CatalogMenu
