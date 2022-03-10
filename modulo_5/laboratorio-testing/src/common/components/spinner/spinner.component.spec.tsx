import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import { trackPromise } from 'react-promise-tracker';
import { act } from 'react-dom/test-utils';

describe('common/components/spinner/spinner.component spec', () => {
  describe('SpinnerComponent layout', () => {
    it('should not display spinner by default', () => {
      //Arrange

      //Act
      render(<SpinnerComponent></SpinnerComponent>);

      //Assert
      const screenComponent = screen.queryByRole('presentation');
      expect(screenComponent).toBeNull();
    });

    it('should display spinner when starting a promise', () => {
      //Arrange

      //Act
      render(<SpinnerComponent></SpinnerComponent>);
      const promise = new Promise(() => {});
      trackPromise(promise);

      //Assert
      const screenComponent = screen.getByRole('presentation');
      expect(screenComponent).toBeInTheDocument();
    });

    it('should display spinner when starting a promise and hide after resolving it', () => {
      //Arrange

      //Act
      render(<SpinnerComponent></SpinnerComponent>);

      trackPromise(
        new Promise((resolve) => {
          resolve({});
        }).then(() => {
          //Assertion after completing the promise
          const screenComponentAfter = screen.queryByRole('presentation');
          expect(screenComponentAfter).toBeNull();
        })
      );

      //Assertion on starting the promise
      const screenComponentBefore = screen.getByRole('presentation');
      expect(screenComponentBefore).toBeInTheDocument();
    });
  });
});
