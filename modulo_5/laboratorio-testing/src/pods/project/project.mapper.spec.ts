import { mapProjectFromApiToVm } from './project.mapper';
import * as viewModel from './project.vm';

describe('pods/project/project.mapper spec', () => {
  describe('mapProjectFromApiToVm initial extreme scenarios', () => {
    it('should return empty project vm when it feeds source project equals undefined', () => {
      //Arrange
      const sourceObject = undefined;
      const expectedProject = viewModel.createEmptyProject();

      //Act
      const result = mapProjectFromApiToVm(sourceObject);

      //Assert
      expect(result).toEqual(expectedProject);
    });

    it('should return empty project vm when it feeds source project equals null', () => {
      //Arrange
      const sourceObject = null;
      const expectedProject = viewModel.createEmptyProject();

      //Act
      const result = mapProjectFromApiToVm(sourceObject);

      //Assert
      expect(result).toEqual(expectedProject);
    });

    it('should return empty employees collection when it feeds source project with employees collection equals undefined', () => {
      //Arrange
      const sourceObject = {
        id: '1',
        name: 'object name',
        externalId: null,
        comments: null,
        isActive: true,
        employees: undefined,
      };

      const expectedProject = {
        id: '1',
        name: 'object name',
        externalId: null,
        comments: null,
        isActive: true,
        employees: [],
      };

      //Act
      const result = mapProjectFromApiToVm(sourceObject);

      //Assert
      expect(result).toEqual(expectedProject);
    });

    it('should return empty employees collection when it feeds source project with employees collection equals null', () => {
      //Arrange
      const sourceObject = {
        id: '1',
        name: 'object name',
        externalId: null,
        comments: null,
        isActive: true,
        employees: null,
      };

      const expectedProject = {
        id: '1',
        name: 'object name',
        externalId: null,
        comments: null,
        isActive: true,
        employees: [],
      };

      //Act
      const result = mapProjectFromApiToVm(sourceObject);

      //Assert
      expect(result).toEqual(expectedProject);
    });

    it('should return empty employees collection when it feeds source project with empty employees collection', () => {
      //Arrange
      const sourceObject = {
        id: '1',
        name: 'object name',
        externalId: null,
        comments: null,
        isActive: true,
        employees: [],
      };

      const expectedProject = {
        id: '1',
        name: 'object name',
        externalId: null,
        comments: null,
        isActive: true,
        employees: [],
      };

      //Act
      const result = mapProjectFromApiToVm(sourceObject);

      //Assert
      expect(result).toEqual(expectedProject);
    });
  });

  describe('mapProjectFromApiToVm with populated objects', () => {
    it('should manage objects properly populated with no employees', () => {
      //Arrange
      const sourceObject = {
        id: '1',
        name: 'object name',
        externalId: 'my external Id',
        comments: 'my comments',
        isActive: true,
        employees: [],
      };

      const expectedProject = {
        id: '1',
        name: 'object name',
        externalId: 'my external Id',
        comments: 'my comments',
        isActive: true,
        employees: [],
      };

      //Act
      const result = mapProjectFromApiToVm(sourceObject);

      //Assert
      expect(result).toEqual(expectedProject);
    });

    it('should manage objects properly populated and with a list of employees', () => {
      //Arrange
      const sourceObject = {
        id: '1',
        name: 'object name',
        externalId: 'my external Id',
        comments: 'my comments',
        isActive: true,
        employees: [
          {
            id: '2',
            isAssigned: true,
            employeeName: 'my employee name',
          },
        ],
      };

      const expectedProject = {
        id: '1',
        name: 'object name',
        externalId: 'my external Id',
        comments: 'my comments',
        isActive: true,
        employees: [
          {
            id: '2',
            isAssigned: true,
            employeeName: 'my employee name',
          },
        ],
      };

      //Act
      const result = mapProjectFromApiToVm(sourceObject);

      //Assert
      expect(result).toEqual(expectedProject);
    });
  });
});
