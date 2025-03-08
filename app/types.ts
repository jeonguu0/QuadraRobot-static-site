export interface Dictionary {
  metadata: {
    title: string
    description: string
  }
  nav: {
    vision: string
    design: string
    team: string
    contact: string
    joinUs: string
  }
  hero: {
    title: string
    subtitle: string
  }
  cta: {
    learnVision: string
    productDesign: string
  }
  vision: {
    title: string
    subtitle: string
    description: string
    philosophy: {
      title: string
      content1: string
      content2: string
    }
    mission: {
      title: string
      content1: string
      content2: string
    }
    name: {
      title: string
      content: string
    }
  }
  design: {
    title: string
    subtitle: string
    description: string
    analysis: {
      title: string
      items: Array<{
        title: string
        description: string
      }>
    }
    solution: {
      title: string
      description: string
      items: Array<{
        title: string
        description: string
      }>
    }
  }
  team: {
    title: string
    subtitle: string
    description: string
    workStyle: {
      title: string
      items: Array<{
        title: string
        description: string
      }>
    }
    positions: {
      title: string
      items: Array<{
        title: string
        description: string
      }>
    }
  }
  contact: {
    title: string
    subtitle: string
    description: string
    email: string
    overseasAddress: string
    chinaAddress: string
    form: {
      name: string
      namePlaceholder: string
      email: string
      emailPlaceholder: string
      position: string
      positionPlaceholder: string
      positions: {
        hardware: string
        software: string
        other: string
      }
      introduction: string
      introductionPlaceholder: string
      submit: string
    }
  }
  footer: {
    copyright: string
    privacy: string
    terms: string
  }
  language: {
    zh: string
    en: string
  }
}

