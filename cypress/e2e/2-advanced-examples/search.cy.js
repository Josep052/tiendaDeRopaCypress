describe("Search elements", ()=>{
    beforeEach(()=>{
        cy.visit('https://www.youtube.com/')
    })
    it('search for element with multiple results', ()=>{
       
        cy.fixture('index.json').then((index)=>{
            cy.get(index.searchBox).type('Maluma beb');
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.title).should('contain', 'Maluma beb')
        })
    })
    it('search for element with not results', ()=>{
        cy.fixture('index.json').then((index)=>{
            cy.get(index.searchBox).type('sjfskdlfjd');
            cy.get(index.searchButton).click();
            cy.get('.ytd-search-header-renderer > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click();
            cy.get(':nth-child(18) > #endpoint > #label > yt-formatted-string.style-scope').click();
        })
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.alert).should('contain', 'No se encontraron resultados')
        })
    })
    })
