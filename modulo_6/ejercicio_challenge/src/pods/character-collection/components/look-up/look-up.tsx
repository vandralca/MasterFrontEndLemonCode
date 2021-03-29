import * as React from 'react';
import { Formik, Form } from 'formik';
import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';
import { TextFieldComponent } from 'common/components';
import { Button } from '@material-ui/core';
import * as classes from './look-up.styles';
import Typography from '@material-ui/core/Typography';

interface Props {
  currentFilter: string;
  onSearch: (newFilter: string) => void;
}

interface Model {
  currentFilter: string;
}

export const LookUp: React.FunctionComponent<Props> = (props) => {
  const { currentFilter, onSearch } = props;
  const model = { currentFilter };

  const onDoSearch = (model: Model): void => {
    onSearch(model.currentFilter);
  };

  return (
    <Formik
      onSubmit={onDoSearch}
      initialValues={model}
      enableReinitialize={true}
    >
      <div className={classes.root}>
        <Form className={classes.form}>
          <TextFieldComponent name="currentFilter" />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            type="submit"
          >
            Search
          </Button>
        </Form>
      </div>
    </Formik>
  );
};
