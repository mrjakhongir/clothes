'use client'
import { AudienceFilterItemI } from '@/types/catalog'
import cn from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type AudienceFilterItemProps = {
	item: AudienceFilterItemI
}

const AudienceFilterItem: React.FC<AudienceFilterItemProps> = ({ item }) => {
	const pathname = usePathname()
	return (
		<li
			className={cn(
				'relative flex-1 text-sm text-center font-medium px-1 py-1 transition-all',
				pathname === item.path &&
					'bg-white rounded-[5px] shadow-[0_6px_12px_rgba(0,0,0,0.1),0_0_5px_rgba(0,0,0,0.1)]'
			)}
		>
			<Link href={item.path}>{item.title}</Link>
		</li>
	)
}

export default AudienceFilterItem
