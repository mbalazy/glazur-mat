import React, { createContext, useState } from 'react'

type MobileMenuContext = {
  isMobileMenuOpen: boolean
  setOpenMobileMenu: (arg0: boolean) => void
}
type MenuProviderProps = {
  children: JSX.Element | JSX.Element[]
}

export const MobileMenuContext = createContext<MobileMenuContext>({
  isMobileMenuOpen: false,
  setOpenMobileMenu: () => false,
})

export const MobileMenuProvider = ({ children }: MenuProviderProps) => {
  const [isMobileMenuOpen, setOpenMobileMenu] = useState(false)
  return (
    <MobileMenuContext.Provider value={{ isMobileMenuOpen, setOpenMobileMenu }}>
      {children}
    </MobileMenuContext.Provider>
  )
}
