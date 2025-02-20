import type React from 'react'
import type { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
	children: React.ReactNode
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
	return (
		<button
			className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
			{...props}
		/>
	)
}

export default Button
