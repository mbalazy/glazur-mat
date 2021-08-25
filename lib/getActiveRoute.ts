export const getActiveRoute = (link: string, pathname: string) => {
  if (pathname === link) {
    return true
    // get active link on all realization pages
  } else if (link === '/realizacje' && pathname.includes('slug')) {
    return true
  } else {
    return false
  }
}
