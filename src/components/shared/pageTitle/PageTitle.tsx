import cn from 'classnames'

type PageTitleProps = {
	content: string
	className?: string
}
const PageTitle: React.FC<PageTitleProps> = ({ content, className }) => {
	return (
		<h1
			className={cn(
				className,
				'text-center text-dark font-semibold text-[15.5px] leading-[20px] -tracking-[0.45px]'
			)}
		>
			{content}
		</h1>
	)
}

export default PageTitle
