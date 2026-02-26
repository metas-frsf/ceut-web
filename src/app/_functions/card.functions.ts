import { Card } from '@app/_models';

export function sortCardsByTitleAsc(a: Card, b: Card): number {
  if (a.title > b.title) {
    return 1;
  } else if (a.title < b.title) {
    return -1;
  } else {
    return 0;
  }
}

export function removeDuplicates(arrayWithDuplicates, propertyToCheck) {
  return arrayWithDuplicates.filter((obj, pos, arr) => {
    return (
      arr.map((mapObj) => mapObj[propertyToCheck]).indexOf(obj[propertyToCheck]) === pos
    );
  });
}

// TODO: Desglosar en otra función que filtra individualmente cada carta, a la cual esta función debería llamar.
export function filterCardsBySearchText(cards: Card[], textToSearch: string): Card[] {
  // Si el texto para filtrar es la cadena vacía, devolver la lista original.
  if (!textToSearch) {
    return cards;
  }

  const textoToSearchLowerCase = textToSearch.toLowerCase();

  const filterByTitle = cards.filter(
    (card) => card.title && card.title.toLowerCase().indexOf(textoToSearchLowerCase) !== -1,
  );

  const filterByContent = cards.filter(
    (card) =>
      card.content &&
      card.content.filter((ContentLine) => {
        const inTitle: boolean =
          ContentLine.title && ContentLine.title.toLowerCase().indexOf(textoToSearchLowerCase) !== -1;

        const inDescription: boolean =
          ContentLine.description && ContentLine.description.toLowerCase().indexOf(textoToSearchLowerCase) !== -1;

        return inTitle || inDescription;
      }).length,
  );

  const filterByFooter = cards.filter((card) => {
    if (card.footer && card.footer.content) {
      return card.footer.content.toLowerCase().indexOf(textoToSearchLowerCase) !== -1;
    }
  });

  // Lista sin duplicados
  return removeDuplicates(filterByTitle.concat(filterByContent).concat(filterByFooter), 'id');
}
