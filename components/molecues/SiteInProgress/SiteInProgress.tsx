import React from 'react'
import { H3 } from '../../../theme/Typography'
import { SiteInProgressWrapper } from './SiteInProgress.style'
import progress from '../../../public/solutions.svg'

const SiteInProgress = () => {
  return (
    <SiteInProgressWrapper>
      <H3>Ta strona obecnie powstaje</H3>
      <img src={progress} alt="trybko" />
    </SiteInProgressWrapper>
  )
}

export default SiteInProgress
