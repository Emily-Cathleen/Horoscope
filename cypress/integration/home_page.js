describe('Mycology horoscope main page', () => {
  it('Should see Mycology Horoscope Main page', () => {
    cy.visit("http://localhost:3000/");
  });
});

//Header
it('Should see a Header', () => {
  cy.visit("http://localhost:3000/")
  .get(".header")
});
