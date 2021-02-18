import React from 'react';
import {
  RowRendererProps,
  RowComponent,
  CellComponent,
} from 'common/components';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Employee } from '../employee-list.vm';

type Props = RowRendererProps<Employee>;

export const EmployeeRowComponent: React.FunctionComponent<Props> = ({
  row,
  onEdit,
  onDelete,
}) => {
  return (
    <RowComponent>
      <CellComponent>
        <Checkbox checked={row.isActive} disabled />
      </CellComponent>
      <CellComponent>{row.id}</CellComponent>
      <CellComponent>{row.name}</CellComponent>
      <CellComponent>{row.email}</CellComponent>
      <CellComponent>
        {row.lastDateIncurred}
        <IconButton onClick={() => onEdit(row.id)} aria-label="Edit employee">
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(row)} aria-label="Delete employee">
          <DeleteIcon />
        </IconButton>
      </CellComponent>
    </RowComponent>
  );
};
