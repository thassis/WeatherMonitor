export const units = (unit) => {
  if (unit === 'metric')
    return 'ºC';
  return 'ºF'
}

export const languages = (language) => {
  if (language === 'pt_Br')
    return pt_Br;
  return en;
}

const pt_Br = {
  searchNewCity: 'Busca nova cidade',
  notFoundCity: 'Não encontramos essa cidade. Por favor, tente fazer uma busca com novos termos.',
  feelsLike: 'Sensação térmica',
  addCity: 'ADICIONAR CIDADE',
  today: 'Hoje',
  sunday: 'Domingo',
  monday: 'Segunda',
  tuesday: 'Terça',
  wednesday: 'Quarta',
  thursday: 'Quinta',
  friday: 'Sexta',
  saturday: 'Sábado',
  emptyList: 'Utilize a Busca acima para poder monitorar suas cidades preferidas.',
  preferences: 'Preferências',
  favorite: 'Favoritar',
  nextDays: 'Próximos dias',
  removeCity: 'Remover cidade',
  sureToRemoveCity: 'Tem certeza que deseja remover a cidade',
  no: 'Não',
  yes: 'Sim',
  tryToSearchThisWay: 'Não encontrou uma sugestão? Tente buscar assim mesmo'
}


const en = {
  searchNewCity: 'Search new city',
  notFoundCity: 'We did not find this city. Please, try to search with new text.',
  feelsLike: 'Feels like',
  addCity: 'ADD CITY',
  today: 'Today',
  sunday: 'Sunday',
  monday: 'Monday',
  tuesday: 'Tuesday',
  wednesday: 'Wednesday',
  thursday: 'Thursday',
  friday: 'Friday',
  saturday: 'Saturday',
  emptyList: 'Use the Search above to monitor your preferred cities.',
  preferences: 'Preferences',
  favorite: 'Favorite',
  nextDays: 'Next days',
  removeCity: 'Remove city',
  sureToRemoveCity: 'Are you sure you want to remove the city',
  no: 'No',
  yes: 'Yes',
  tryToSearchThisWay: 'Did not find a suggestion? Try to search anyway'
}