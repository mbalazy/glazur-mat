import { useContext } from 'react'
import { MobileMenuContext } from '../lib/mobileMenuContext'

export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext)
  if (context === undefined) {
    throw new Error('useContext must be used within Provider')
  }
  return context
}
