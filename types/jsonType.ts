export interface iCardDb {
  cardId: number;
  cardScr: string;
  title: string;
  history: string;
  rountingLink: string;
  definition: string;
}

export interface iFeatureDb {
  FeatureId: number;
  brandName: {
    text: string;
    textColor: string;
  };
  title: string;
  details: string;
  buttonName: {
    text: string;
    textColor: string;
  };
  routingLink: string;
  conntainerImages: Array<{
    containerImageOne?: string;
    containerImageTwo?: string;
    containerImageThree?: string;
  }>;
  mainColor: string;
  mainBgColor: string;
  addingInformaton: {
    title: string;
    definition: string;
    other: {
      scr: string;
      comm: string;
    };
  };
}

export interface IClient {
  clientId: number;
  clientName: string;
  companyName: string;
  feedBack: string;
  clientProfile: string;
  testimonials: string;
  buttonName: {
    text: string;
    style: string;
  };
}

export interface IAboutMeDb {
  id: number;
  title: string;
  definition: string;
  experiences: {
    expId: number;
    title: string;
    scr: string;
    definition: string;
    companyName: string;
    Timeless: string;
  }[];
  hobbyDb: {
    id: number;
    title: string;
    definition: string;
    scr1: string;
    scr2: string;
    scr3: string;
    scr4: string;
  }[];
}

export interface iIndexDb {
  heroSection: {
    title: string;
    bio: string;
    buttonName: string;
    buttonColor: string;
  }[];
  contactDb: {
    title: string;
    email: { text: string; phValue: string };
    message: { text: string; phMessage: string };
    submitBtn: { text: string; color: string };
    bgScr: string;
  }[];
  projectDb: {
    projectTitle: string;
    definition: string;
  }[];
}
