import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('common/components/confirmation-dialog/confirmation-dialog.component spec', () => {
  describe('ConfirmationDialogComponent layout', () => {
    it('should display confirmation dialog with expected labels', () => {
      //Arrange
      const title = 'my title';
      const closeButtonLabel = 'close button';
      const acceptButtonLabel = 'accept button';
      const labels =
      {
        closeButton: closeButtonLabel,
        acceptButton: acceptButtonLabel,
      }

      //Act
      render(<ConfirmationDialogComponent isOpen={true}
        onAccept={jest.fn}
        onClose={jest.fn}
        title={title}
        labels={labels}>
      </ConfirmationDialogComponent>)

      //Assert
      //expect(asFragment()).toMatchSnapshot();

      const titleElement = screen.getByText(title);
      const closeButtonElement = screen.getByText(closeButtonLabel);
      const acceptButtonElement = screen.getByText(acceptButtonLabel);

      expect(titleElement).toBeInTheDocument();
      expect(titleElement.tagName).toEqual('H2');

      expect(closeButtonElement).toBeInTheDocument();
      expect(closeButtonElement.tagName).toEqual('SPAN');

      expect(acceptButtonElement).toBeInTheDocument();
      expect(acceptButtonElement.tagName).toEqual('SPAN');
    });
  });

  describe('ConfirmationDialogComponent behavior', () => {
    it('should execute onAccept and onClose handle method when clicking on accept button', () => {
      //Arrange
      const title = 'my title';
      const closeButtonLabel = 'close button';
      const acceptButtonLabel = 'accept button';
      const labels =
      {
        closeButton: closeButtonLabel,
        acceptButton: acceptButtonLabel,
      }

      const onAcceptStub = jest.fn();
      const onCloseStub = jest.fn();

      //Act
      render(<ConfirmationDialogComponent isOpen={true}
        onAccept={onAcceptStub}
        onClose={onCloseStub}
        title={title}
        labels={labels}>
      </ConfirmationDialogComponent>)

      const acceptButtonElement = screen.getByText(acceptButtonLabel);
      userEvent.click(acceptButtonElement);

      //Assert
      expect(onCloseStub).toBeCalledTimes(1);
      expect(onAcceptStub).toBeCalledTimes(1);
    });

    it('should execute onClose but not onAccept handle method when clicking on close button', () => {
      //Arrange
      const title = 'my title';
      const closeButtonLabel = 'close button';
      const acceptButtonLabel = 'accept button';
      const labels =
      {
        closeButton: closeButtonLabel,
        acceptButton: acceptButtonLabel,
      }

      const onAcceptStub = jest.fn();
      const onCloseStub = jest.fn();

      //Act
      render(<ConfirmationDialogComponent isOpen={true}
        onAccept={onAcceptStub}
        onClose={onCloseStub}
        title={title}
        labels={labels}>
      </ConfirmationDialogComponent>)

      const closeButtonElement = screen.getByText(closeButtonLabel);
      userEvent.click(closeButtonElement);

      //Assert
      expect(onCloseStub).toBeCalledTimes(1);
      expect(onAcceptStub).toBeCalledTimes(0);
    });
  });
});
