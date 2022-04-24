describe('Mycology horoscope main page', () => {

  let testData;

  beforeEach(() => {
    testData = [{
      name: "Oyster Mushroom",
      img_url: "https://upload.wikimedia.org/wikipedia/commons/9/94/Oyster_mushoom_fells.jpg",
      id: 1,
      month: [
        "December",
        "January"
      ],
      sign: "Capricorn",
      messages: [
        "hello Janurary Capricorn ",
        "Hi January"
      ]
    }]
  });

  it('Should see Mycology Horoscope Main page', () => {
    cy.visit("http://localhost:3000/");
      cy.intercept("GET", 'https://mycology-horoscope-api.herokuapp.com/v1/monthlyData/', testData).as("horoscope")
  });


//Header
it('Should see a Header', () => {
  cy.visit("http://localhost:3000/")
    cy.intercept("GET", 'https://mycology-horoscope-api.herokuapp.com/v1/monthlyData/', testData).as("horoscope")
    .get(".header").contains('Mycologist Horoscope')
});

it('Should see a saved Horoscopes Page button', () => {
  cy.visit("http://localhost:3000/")
    cy.intercept("GET", 'https://mycology-horoscope-api.herokuapp.com/v1/monthlyData/', testData).as("horoscope")
    .get(".saved-horoscopes-button")
    .click()
    .get('.sorted-horoscopes-container').contains('Here are all of your saved horoscopes:')
    .should("exist")
});

it('Should see a "Choose your birthday form', () => {
  cy.visit("http://localhost:3000/")
  .get(".form-container").contains('Select your birthday...')
});

it('A user should be able to select a month on the form', () => {
  cy.visit("http://localhost:3000/")
    cy.intercept("GET", 'https://mycology-horoscope-api.herokuapp.com/v1/monthlyData/', testData).as("horoscope")
    .get('.month-selector')
    .select("December")
    .get('.day-selector')
    .select(1)
    .get('.submit-button')
    .click()
    .get('.favorite-button')
    .click()
    .get('.saved-horoscopes-button')
    .click()
    .get('.sorted-horoscopes-container')
});
});
