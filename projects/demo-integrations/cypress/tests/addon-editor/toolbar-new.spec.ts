import {EDITOR_PAGE_URL} from '../../support/shared.entities';

const WAIT_BEFORE_SCREENSHOT = 1000; // editor has a huge number of icons (that is why we wait so long)

describe("Editor's toolbar", () => {
    beforeEach(() => {
        cy.viewport(1400, 720);
        cy.goToDemoPage(EDITOR_PAGE_URL, {waitAllIcons: true});
        cy.hideHeader();
    });

    it("closes tool's dropdown if opened new tool's dropdown", () => {
        cy.get('#basic').findByAutomationId('tui-doc-example').as('wrapper');
        cy.get('@wrapper').scrollIntoView().find('tui-editor').click();

        cy.get('@wrapper')
            // .findByAutomationId('toolbar__color-button')
            .find('button[icon="tuiIconColorLarge"]') // TODO replace by row above later (after sync with next)
            .click();
        cy.get('@wrapper')
            // .findByAutomationId('toolbar__hilite-button')
            .find('button[icon="tuiIconHiliteLarge"]') // TODO replace by row above later (after sync with next)
            .click();

        cy.get('@wrapper')
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot('1-open-new-dropdown-close-old-dropdown');
    });

    it("closes tool's dropdown if clicked outside", () => {
        cy.get('#basic').findByAutomationId('tui-doc-example').as('wrapper');
        cy.get('@wrapper').scrollIntoView();

        cy.get('@wrapper')
            // .findByAutomationId('toolbar__color-button')
            .find('button[icon="tuiIconColorLarge"]') // TODO replace by row above later (after sync with next)
            .click();

        cy.get('tui-palette').should('exist');
        cy.get('@wrapper').find('tui-editor-socket').click();
        cy.get('tui-palette').should('not.exist');
    });
});
