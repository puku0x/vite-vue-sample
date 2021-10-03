import { getTitle } from '../support/app.po';

describe('e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should render title', () => {
    getTitle().contains('Hello Vue 3 + TypeScript + Vite');
  });
});
