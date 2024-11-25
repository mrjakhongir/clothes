import Image from 'next/image'

const SearchInput = () => {
	return (
		<div className='flex items-center justify-between gap-2 px-[10px] py-[7.5px] bg-slate-100 rounded-[10px]'>
			<Image
				src='/icons/catalog/search.svg'
				width={18}
				height={18}
				alt='search'
			/>
			<input
				className='flex-1 bg-transparent placeholder:text-[#7e7f83] outline-none'
				type='text'
				placeholder='Товар, бренд или артикул'
			/>
			<Image
				src='/icons/catalog/camera.svg'
				width={18}
				height={18}
				alt='search'
			/>
		</div>
	)
}

export default SearchInput
