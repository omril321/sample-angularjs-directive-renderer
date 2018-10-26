require('angularjs-directive-renderer');

const appUrl = 'http://localhost:5001';

describe('awesomeCat', () => {

    it('should display a serious cat name when beCute is false', () => {
        cy.visit(appUrl);
        const scope = {data: {beCute: false}};

        cy.renderIsolatedDirective({
            templateToCompile: '<awesome-cat be-cute="data.beCute"></awesome-cat>',
            injectedScopeProperties: scope,
        });

        cy.getTestedDirectiveDomElement().then(element => {
            expect(element.text().trim()).to.equal('Name: Serious Cat');
        });
    });

    it('should display a cute cat name when beCute is true', () => {
        cy.visit(appUrl);
        const scope = {data: {beCute: true}};

        cy.renderIsolatedDirective({
            templateToCompile: '<awesome-cat be-cute="data.beCute"></awesome-cat>',
            injectedScopeProperties: scope,
        });

        cy.getTestedDirectiveDomElement().then(element => {
            expect(element.text().trim()).to.equal('Name: Cute Cat');
        });
    });

    it('should set $scope.catName to a cute cat when beCute is true', () => {
        cy.visit(appUrl);
        const scope = {data: {beCute: true}};
        
        cy.renderIsolatedDirective({
            templateToCompile: '<awesome-cat be-cute="data.beCute"></awesome-cat>',
            injectedScopeProperties: scope,
        });

        cy.getTestedElementScope().then(elemScope => {
            expect(elemScope.catName).to.equal('Cute Cat');
        });
    });

    it('should set $scope.catName to a serious cat when beCute is false', () => {
        cy.visit(appUrl);
        const scope = {data: {beCute: false}};

        cy.renderIsolatedDirective({
            templateToCompile: '<awesome-cat be-cute="data.beCute"></awesome-cat>',
            injectedScopeProperties: scope,
        });

        cy.getTestedElementScope().then(elemScope => {
            expect(elemScope.catName).to.equal('Serious Cat');
        });
    });

    it('should look as expected when beCute is true', () => {
        cy.visit(appUrl);
        const scope = {data: {beCute: true}};

        cy.renderIsolatedDirective({
            templateToCompile: '<awesome-cat be-cute="data.beCute"></awesome-cat>',
            injectedScopeProperties: scope,
        });

        cy.screenshot(); //external tools can validate this screenshot
    });


    it('should look as expected when beCute is false', () => {
        cy.visit(appUrl);
        const scope = {data: {beCute: false}};

        cy.renderIsolatedDirective({
            templateToCompile: '<awesome-cat be-cute="data.beCute"></awesome-cat>',
            injectedScopeProperties: scope,
        });

        cy.screenshot(); //external tools can validate this screenshot
    });

});