describe('Mycology horoscope main page', () => {
  it('Should see Mycology Horoscope Main page', () => {
    cy.visit("http://localhost:3000/");
  });
});

//Header
it('Should see a Header', () => {
  cy.visit("http://localhost:3000/")
  .get(".header").contains('Mycologist Horoscope')
});

it('Should see a saved Horoscopes Page button', () => {
  cy.visit("http://localhost:3000/")
  .get(".favorite")
  .click()
  .get('.sorted-horoscopes-container').contains('Here are all of your saved horoscopes:')
  .should("exist")
});

it('Should see a "Choose your birthday form', () => {
  cy.visit("http://localhost:3000/")
  .get(".form-container").contains('Select your birthday...')
})
