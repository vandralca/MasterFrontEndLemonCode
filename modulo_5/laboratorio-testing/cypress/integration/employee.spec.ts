describe('Employee list', () => {
  it('When openning employee list then it should load data on load', () => {
    // Arrange

    // Act
    cy.visit('/employees');

    //Assert
    cy.findAllByRole('row').should('have.length.greaterThan', 1);
  });

  it('When clicking on filter input field then it get focus', () => {
    // Arrange

    // Act
    cy.visit('/employees');
    const textFilter = cy.findAllByRole('textbox').first();
    textFilter.click();

    //Assert
    textFilter.should('have.focus');
  });

  it('When typing some data on input field then result list contain expected records', () => {
    // Arrange

    // Act
    cy.visit('/employees');
    const textFilter = cy.findAllByRole('textbox').first();
    textFilter.type('Jose');

    //Assert
    cy.findAllByRole('row').should('have.length', 2);
  });

  it('When clicking on New Employee, then it redirects to new Employee form', () => {
    // Arrange

    // Act
    cy.visit('/employees');
    const botonNuevoEmpleado = cy
      .findAllByRole('button', { name: 'Nuevo empleado' })
      .first();
    botonNuevoEmpleado.click();

    //Assert
    cy.url().should('equal', 'http://localhost:8080/#/employees/0');
  });

  it('When clicking on Edit Employee, then it redirects to edit Employee form', () => {
    // Arrange

    // Act
    cy.visit('/employees');
    const botonEditarEmpleado = cy
      .findAllByRole('button', { name: 'Edit employee' })
      .first();
    botonEditarEmpleado.click();

    //Assert
    cy.url().should('equal', 'http://localhost:8080/#/employees/1');
  });

  it('When clicking on Delete Employee, then it opens a confirmation dialog', () => {
    // Arrange

    // Act
    cy.visit('/employees');
    const botonBorrarEmpleado = cy
      .findAllByRole('button', { name: 'Delete employee' })
      .first();
    botonBorrarEmpleado.click();

    //Assert
    cy.findAllByRole('presentation').first().should('not.be.null');
  });

  it('When cancelling a deletion, then it closes confirmation dialog', () => {
    // Arrange

    // Act
    cy.visit('/employees');
    const botonBorrarEmpleado = cy
      .findAllByRole('button', { name: 'Delete employee' })
      .first();
    botonBorrarEmpleado.click();

    const botonCancelarBorrado = cy.findAllByRole('button', {
      name: 'Cancelar',
    });
    botonCancelarBorrado.click();

    //Assert
    cy.findAllByRole('presentation').first().should('not.null');
  });

  it('When confirming a deletion, then it closes confirmation dialog', () => {
    // Arrange

    // Act
    cy.visit('/employees');
    let textFilter = cy.findAllByRole('textbox').first();
    textFilter.type('Daniel');
    const botonBorrarEmpleado = cy
      .findAllByRole('button', { name: 'Delete employee' })
      .first();
    botonBorrarEmpleado.click();

    const botonConfirmarBorrado = cy.findAllByRole('button', {
      name: 'Aceptar',
    });
    botonConfirmarBorrado.click();

    //Assert
    cy.findAllByRole('presentation').first().should('not.null');
  });
});
