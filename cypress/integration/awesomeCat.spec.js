require('angularjs-directive-renderer');

const appUrl = 'http://localhost:5001';

describe('awesomeCat', () => {

    it('should display a derp cat name when derp is true', () => {
        cy.visit(appUrl);
        const scope = {data: {shouldDerp: false}};

        cy.renderIsolatedDirective({
            templateToCompile: '<awesome-cat derp="data.shouldDerp"></awesome-cat>',
            injectedScopeProperties: scope,
        });

        cy.getTestedDirectiveDomElement(element => {
            expect(element.text()).to.equal('Derp Cat');
        });
    });

    it('should display a cute cat name when derp is false', () => {
        cy.visit(appUrl);
        const scope = {data: {shouldDerp: true}};

        cy.renderIsolatedDirective({
            templateToCompile: '<awesome-cat derp="data.shouldDerp"></awesome-cat>',
            injectedScopeProperties: scope,
        });

        cy.getTestedDirectiveDomElement(element => {
            expect(element.text()).to.equal('Cute Cat');
        });
    });

    it('should set $scope.catName to a derp cat when derp is true', () => {
        cy.visit(appUrl);
        const scope = {data: {shouldDerp: true}};

        cy.renderIsolatedDirective({
            templateToCompile: '<awesome-cat derp="data.shouldDerp"></awesome-cat>',
            injectedScopeProperties: scope,
        });

        cy.getTestedElementScope().then(elemScope => {
            expect(elemScope.catName).to.equal('Derp Cat');
        });
    });

    it('should set $scope.catName to a cute cat when derp is false', () => {
        cy.visit(appUrl);
        const scope = {data: {shouldDerp: false}};

        cy.renderIsolatedDirective({
            templateToCompile: '<awesome-cat derp="data.shouldDerp"></awesome-cat>',
            injectedScopeProperties: scope,
        });

        cy.getTestedElementScope().then(elemScope => {
            debugger;
            expect(elemScope.catName).to.equal('Cute Cat');
        });

/*        cy.getTestedDirectiveDomElement().then(elem => {
            cy.getAngular().then(angular => {
                debugger;
                angular.element(elem).isolateScope();
            })
            // expect(elem.isolateScope().data.catName).to.equal('Cute Cat');
        });*/
    });

    it('should look as expected when derp is true', () => {
        cy.visit(appUrl);
        const scope = {data: {shouldDerp: true}};

        cy.renderIsolatedDirective({
            templateToCompile: '<awesome-cat derp="data.shouldDerp"></awesome-cat>',
            injectedScopeProperties: scope,
        });

        cy.screenshot()
    });


    it('should look as expected when derp is false', () => {
        cy.visit(appUrl);
        const scope = {data: {shouldDerp: false}};

        cy.renderIsolatedDirective({
            templateToCompile: '<awesome-cat derp="data.shouldDerp"></awesome-cat>',
            injectedScopeProperties: scope,
        });

        cy.screenshot()
    });

});