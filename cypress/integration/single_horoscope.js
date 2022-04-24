describe('A single horoscope page', () => {

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

  it('Should see a Header', () => {
    cy.visit("http://localhost:3000/horoscope")
      cy.intercept("GET", 'https://mycology-horoscope-api.herokuapp.com/v1/monthlyData/', testData).as("horoscope")
      .get(".header").contains('Mycologist Horoscope')
  });

  it('Should see a "Choose your birthday form', () => {
    cy.visit("http://localhost:3000/")
    .get(".form-container").contains('Select your birthday...')
  });

  it('Should fill out the form to see a single horoscope', () => {
    cy.visit("http://localhost:3000");
      cy.intercept("GET", 'https://mycology-horoscope-api.herokuapp.com/v1/monthlyData/', testData).as("horoscope")
      .get('.month-selector')
      .select("December")
      .get('.day-selector')
      .select(1)
      .get('.submit-button')
      .click()
      .get('.single-horoscope-container')
      .contains('Your sign is')
  });

});
