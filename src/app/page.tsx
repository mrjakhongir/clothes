import Container from '@/components/shared/Container'
import Link from 'next/link'

export default function Home() {
	return (
		<div>
			<Container>
				<Link href='/catalog'>Catalog</Link>
			</Container>
		</div>
	)
}
