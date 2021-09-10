import Footer from '../organisms/Footer/Footer'
import Hero, { HeroProps } from '../organisms/Hero/Hero'
import SuperNav from '../organisms/SuperNav/SuperNav'
import { HeaderStyles } from './MainTemplate.style'

type MainTemplateProps = {
  children: JSX.Element | JSX.Element[]
} & HeroProps

const MainTemplate = ({ children, ...rest }: MainTemplateProps) => {
  return (
    <>
      <HeaderStyles>
        <SuperNav />
        <Hero {...rest} />
      </HeaderStyles>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainTemplate
