export const organization = {
  name: 'Applewood School District',
  shortname: 'ASD',
  logoUrl: 'img/Applewood_logo.png',
  contact: {
    address: '100 Main Street, Anytown, USA 12345',
    phone: '555-123-4567',
    email: 'sfa@state.us'
  },
  paperApplication: {
    url: 'http://www.fns.usda.gov/sites/default/files/cn/SP34-2016a2.pdf',
    address: '100 Main Street, Anytown, USA 12345',
    phone: '555-123-4567',
    email: 'sfa@state.us'
  }
}

export const assistancePrograms = [
  'Supplemental Nutrition Assistance Program (SNAP)',
  'Temporary Assistance for Needy Families (TANF)',
  'Food Distribution Program on Indian Reservations (FDPIR)'
]

export const assistanceProgramsVar = {
  snap: {
    fullName: 'Supplemental Nutrition Assistance Program',
    accronym: 'SNAP',
  },
  tanf: {
    fullName: 'Temporary Assistance for Needy Families',
    accronym: 'TANF',
  },
  fdpir: {
    fullName: 'Food Distribution Program on Indian Reservations',
    accronym: 'FDPIR',
  }
}

export const thankYou = [
  'You will hear from us soon with your certification decision!'
]

export const hmrPrograms = {
  mep: {
    fullName: 'Migrant Education Program',
    accronym: 'MEP',
  },
  mckinney: {
    shortName: 'McKinney-Vento Homeless Assistance Act',
    fullName: 'McKinney-Vento Education of Homeless Chilren and Youth Assistance Act',
  },
  runaway: 'Runaway and Homeless Youth Act',
}

// Add to this list to support additional locales.
// NOTE 1: keep English as the first entry.
// NOTE 2: each locale must be accompanied by a corresponding
//         translation JSON file in /translations/
export const locales = [
  {
    code: 'en',
    language: 'English',
    iSpeak: 'I speak English'
  },
  {
    code: 'es',
    language: 'Español',
    iSpeak: 'Yo hablo español'
  },
  {
    code: 'zh',
    language: '中文',
    iSpeak: '我说中文'
  },
]
