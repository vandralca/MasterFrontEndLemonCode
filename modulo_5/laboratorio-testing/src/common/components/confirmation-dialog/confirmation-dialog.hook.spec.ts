import { renderHook, act } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { createEmptyLookup } from 'common/models';

describe('common/components/confirmation-dialog/confirmation-dialog.hook.spec.ts', () => {
  it('Confirmation dialog is nop open on starting', () => {
    //Arrange
    const expectedItemToDelete = createEmptyLookup();

    //Act
    const { result } = renderHook(() => useConfirmationDialog());

    //Assert
    expect(result.current.isOpen).toBeFalsy();
    expect(result.current.itemToDelete).toEqual(expectedItemToDelete);
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });

  it('Confirmation dialog is set as open after executing callback to open', () => {
    //Arrange
    const expectedItemToDelete = createEmptyLookup();
    expectedItemToDelete.name = 'my item to delete';

    //Act
    const { result } = renderHook(() => useConfirmationDialog());

    const resultOnAcceptStub = jest.spyOn(result.current, 'onAccept');
    const resultOnCloseStub = jest.spyOn(result.current, 'onClose');
    const resultOnOpenDialogStub = jest.spyOn(result.current, 'onOpenDialog');

    act(() => {
      result.current.onOpenDialog(expectedItemToDelete);
    });

    //Assert
    expect(result.current.isOpen).toBeTruthy();
    expect(result.current.itemToDelete).toEqual(expectedItemToDelete);
    expect(resultOnAcceptStub).toBeCalledTimes(0);
    expect(resultOnCloseStub).toBeCalledTimes(0);
    expect(resultOnOpenDialogStub).toBeCalledTimes(1);
  });

  it('Confirmation dialog is set as closed after executing callback to close (without accepting)', () => {
    //Arrange
    const expectedItemToDelete = createEmptyLookup();
    expectedItemToDelete.name = 'my item to delete';

    //Act
    const { result } = renderHook(() => useConfirmationDialog());

    const resultOnAcceptStub = jest.spyOn(result.current, 'onAccept');
    const resultOnCloseStub = jest.spyOn(result.current, 'onClose');
    const resultOnOpenDialogStub = jest.spyOn(result.current, 'onOpenDialog');

    act(() => {
      result.current.onOpenDialog(expectedItemToDelete);
      result.current.onClose();
    });

    //Assert
    expect(result.current.isOpen).toBeFalsy();
    expect(result.current.itemToDelete).toEqual(expectedItemToDelete);
    expect(resultOnAcceptStub).toBeCalledTimes(0);
    expect(resultOnCloseStub).toBeCalledTimes(1);
    expect(resultOnOpenDialogStub).toBeCalledTimes(1);
  });

  it('Confirmation dialog behaves as expected when accepting (without closing)', () => {
    //Arrange
    const expectedItemToDelete = createEmptyLookup();
    expectedItemToDelete.name = 'my item to delete';
    const expectedItemAfterDeleting = createEmptyLookup();

    //Act
    const { result } = renderHook(() => useConfirmationDialog());

    const resultOnAcceptStub = jest.spyOn(result.current, 'onAccept');
    const resultOnCloseStub = jest.spyOn(result.current, 'onClose');
    const resultOnOpenDialogStub = jest.spyOn(result.current, 'onOpenDialog');

    act(() => {
      result.current.onOpenDialog(expectedItemToDelete);
      result.current.onAccept();
    });

    //Assert
    expect(result.current.isOpen).toBeTruthy();
    expect(result.current.itemToDelete).toEqual(expectedItemAfterDeleting);
    expect(resultOnAcceptStub).toBeCalledTimes(1);
    expect(resultOnCloseStub).toBeCalledTimes(0);
    expect(resultOnOpenDialogStub).toBeCalledTimes(1);
  });

  it('Confirmation dialog behaves as expected when accepting and closing)', () => {
    //Arrange
    const expectedItemToDelete = createEmptyLookup();
    expectedItemToDelete.name = 'my item to delete';
    const expectedItemAfterDeleting = createEmptyLookup();

    //Act
    const { result } = renderHook(() => useConfirmationDialog());

    const resultOnAcceptStub = jest.spyOn(result.current, 'onAccept');
    const resultOnCloseStub = jest.spyOn(result.current, 'onClose');
    const resultOnOpenDialogStub = jest.spyOn(result.current, 'onOpenDialog');

    act(() => {
      result.current.onOpenDialog(expectedItemToDelete);
      result.current.onAccept();
      result.current.onClose();
    });

    //Assert
    expect(result.current.isOpen).toBeFalsy();
    expect(result.current.itemToDelete).toEqual(expectedItemAfterDeleting);
    expect(resultOnAcceptStub).toBeCalledTimes(1);
    expect(resultOnCloseStub).toBeCalledTimes(1);
    expect(resultOnOpenDialogStub).toBeCalledTimes(1);
  });
});
