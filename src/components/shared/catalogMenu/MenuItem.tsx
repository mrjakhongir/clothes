import { CatalogMenuItem } from '@/types/catalog'
import Image from 'next/image'

type MenuItemProps = {
	menu: CatalogMenuItem
}

const MenuItem: React.FC<MenuItemProps> = ({ menu }) => {
	return (
		<div className='flex items-center justify-between rounded-xl overflow-hidden'>
			<div className='flex-[2] bg-bg py-[10px] px-[15px]'>
				<h2 className='text-[15.5px] leading-[18.76px] font-bold -tracking-[0.3px] mb-[5px]'>
					{menu.title}
				</h2>
				<p className='text-[12px] leading-[15px]'>{menu.text}</p>
			</div>
			<div className='flex-1'>
				<Image
					className='w-full h-full object-cover'
					src={menu.img}
					width={130}
					height={84}
					alt={menu.title}
				/>
			</div>
		</div>
	)
}

export default MenuItem
