import { ButtonStyles } from './Button.style'

export interface ButtonProps {
  children: string | number
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <ButtonStyles {...props}>{children}</ButtonStyles>
}

export default Button
