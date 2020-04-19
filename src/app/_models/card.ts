export class Card {
  id: number;
  link: string | Link;
  icon: string;
  class: CardCssClasses;
  title: string;
  content: CardContent[];
  footer: Footer;
  enabled: boolean;
  modifiable?: boolean;
  name?: string;
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
  link: string | Link;
}

export class Footer {
  separator?: boolean;
  class: string;
  content: string;
}

export class Link {
  type: string;
  url: string;
}
