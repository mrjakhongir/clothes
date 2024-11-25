import cn from 'classnames'

type ContainerProps = {
	children: React.ReactNode
	className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
	return (
		<div className={cn(className, 'mx-auto px-3 max-w-[400px]')}>
			{children}
		</div>
	)
}

export default Container
