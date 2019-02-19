export class Card {
  id: number;
  link: string;
  icon: string;
  class: CardCssClasses;
  title: string;
  content: CardContent[];
  footer: Footer;
  enabled: boolean;
  modifiable?: boolean;
}

export class CardCssClasses {
  title?: string;
  card: string;
  content?: string;
  image?: string;
}

export class CardContent {
  title: string;
  description: string;
  link?: string;
}

export class Footer {
  separator?: boolean;
  class: string;
  content: string;
}
