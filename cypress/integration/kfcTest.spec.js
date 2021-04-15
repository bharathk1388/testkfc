const acceptAllCokies = '#onetrust-accept-btn-handler'
const postCodeBox = '.kCfFDd > .sc-gojNiO'
const submitButton = '.sc-cMljjf > .sc-TOsTZ'
const mealsForOne = '.sc-jWBwVP > .sc-kgoBCf > .sc-ckVGcZ > :nth-child(2) > .sc-eHgmQL > .sc-jWojfa'
const boxMeal = '.sc-jWBwVP > .sc-kgoBCf > .sc-ckVGcZ > :nth-child(1) > .sc-eHgmQL > .sc-jWojfa'
const secondMeal = ':nth-child(2) > .bZKYXV > :nth-child(2) > .sc-AnqlK > .sc-jWBwVP > .sc-kgAjT'
const continueWithMyOrder = '.lnwZbP'
const addToOrder = '.hVfKAj > .sc-cJSrbW'
const selectFromMenu = '.eIjOBt > :nth-child(3)'
const viewOrder = '.sc-iFMziU > a > .sc-eHgmQL > .sc-kgAjT'


describe('Order a boxmeal', () => {

    it('should add a boxmeal to the basket', () => {
        cy.visit('https://www.kfc.co.uk')
        cy.contains("FIND A KFC").click({force: true})
        cy.get(acceptAllCokies).click()
        cy.get(postCodeBox).click({force: true}).type('Cobham')
        cy.get(submitButton).click({force: true})
        cy.contains('order collection now').click({force: true})
        cy.get(mealsForOne).click()
        cy.get(boxMeal).click({force:true})
        cy.get(secondMeal).click({force:true})
        cy.get(continueWithMyOrder).click()
        cy.wait(200)
        cy.get(selectFromMenu).click({force: true})
        cy.get(addToOrder).click()
        cy.get(viewOrder).click()
        //view order page blancks out with an Uncaught:exception
        // I tried "cy.on('uncaught:exception', () => false)" dint work
        //I will add a screen shot of the page as of now 
    })
})