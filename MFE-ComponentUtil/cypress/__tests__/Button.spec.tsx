/// <reference types="cypress"/>

Cypress.config("pageLoadTimeout", 60000);
Cypress.config("defaultCommandTimeout", Cypress.env("defaultCommandTimeout"));
Cypress.env("taskTimeout");
Cypress.config("execTimeout", Cypress.env("execTimeout"));
import React from "react";
import { mount } from "cypress-react-unit-test";
import Button from "../../src/Button";

describe("Primary button test suite", function () {
  const setup = (isHidden = false) => {
    mount(
      <Button
        buttonText="My Button"
        dataCy="myButton"
        id="myButton"
        isHidden={isHidden}
      />
    );
  };

  it("Button visibility test", function () {
    setup();
    cy.get('[data-cy="myButton"]').should("be.visible");
    cy.get('[data-cy="myButton"]').should("have.text", "My Button");
  });

  it("Button non visibility test", function () {
    setup(true);
    cy.get('[data-cy="myButton"]').should("not.exist");
  });
});
