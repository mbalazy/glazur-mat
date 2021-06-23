import logo from '../../../public/glazurmat_logo.svg'

type LogoProps = {
  height?: number
  className?: string
}

const Logo = ({ height = 85, className }: LogoProps) => (
  <img src={logo} alt="logo firmowe" height={height} className={className} />
)

export default Logo
