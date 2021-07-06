import Footer from '../organisms/Footer/Footer'
import Hero, { HeroProps } from '../organisms/Hero/Hero'
import SuperNav from '../organisms/SuperNav/SuperNav'

type MainTemplateProps = {
  children: JSX.Element | JSX.Element[]
} & HeroProps

const MainTemplate = ({ children, ...rest }: MainTemplateProps) => {
  return (
    <>
      <header>
        <SuperNav />
        <Hero {...rest} />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainTemplate
