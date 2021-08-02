import businessInfo from './theme/businessInfo'
const { fullTitle } = businessInfo

export default {
  title: `${fullTitle}`,
  description:
    'Świadczymy profesjonalne usługi z zakresu prac budowlanych i wykończeniowych na terenie Wolbromia i okolic.',
  openGraph: {
    type: 'website',
    title: `${fullTitle}`,
    locale: 'pl_PL',
    url: 'https://www.glazur-mat.pl/',
    site_name: 'Glazur-Mat',
  },
}
