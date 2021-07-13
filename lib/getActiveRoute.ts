export const getActiveRoute = (link: string, pathname: string) => {
  if (pathname === link) {
    return true
  } else if (link === '/realizacje' && pathname.includes('slug')) {
    return true
  } else {
    return false
  }
}
