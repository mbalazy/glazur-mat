import Footer from '../organisms/Footer/Footer'
import Hero, { HeroProps } from '../organisms/Hero/Hero'
import SuperNav from '../organisms/SuperNav/SuperNav'
import { HeaderStyles } from './MainTemplate.style'

import FacebookChat from '../organisms/FacebookChat/FacebookChat'

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
      <FacebookChat />
      <Footer />
    </>
  )
}

export default MainTemplate
