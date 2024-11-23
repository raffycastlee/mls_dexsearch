import {
  initDexIfEmpty,
  getPoke,
  displayMainPoke,
  displayRest,
  handleSearch,
  handleClose,
  handleSubmit
} from './src/dom-helpers'

const main = async () => {
  // add listeners for floating button
  document
  .querySelector('button#search')
  .addEventListener('click', handleSearch);
  document
  .querySelector('button#close')
  .addEventListener('click', handleClose);
  
  // add listener for form submit modal
  document
  .querySelector('form')
  .addEventListener('submit', handleSubmit);

  // inits GET if not in local
  await initDexIfEmpty();
  await getPoke();
  displayMainPoke();
  await displayRest();

}

main();
