export type Plan = {
  id: string;
  name: string;
  note: string;
  price: string;
  period: string;
  points: string[];
  featured?: boolean;
};

export type Track = {
  title: string;
  text: string;
  image: string;
};

export type Fact = {
  kicker: string;
  quote: string;
  who: string;
  meta: string;
};

export type Question = {
  q: string;
  a: string;
};

export type Gym = {
  slug: string;
  name: string;
  mark: string;
  city: string;
  address: string;
  street: string;
  phoneDisplay: string;
  phoneHref: string;
  contactLabel: string;
  vkHref: string;
  vkWriteHref: string;
  mapHref: string;
  rating: string;
  eyebrow: string;
  headline: [string, string];
  lead: string;
  wordmark: string;
  directionsTitle: string;
  directionsText: string;
  tracks: Track[];
  plans: Plan[];
  priceTitle: string;
  priceIntro: string;
  formatsTitle: string;
  formatsText: string;
  factsTitle: string;
  factsText: string;
  facts: Fact[];
  questions: Question[];
  visitTitle: string;
  visitLead: string;
  footerNote: string;
  offerTo: string;
  offer: string;
};
