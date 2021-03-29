import * as React from 'react';
import { Formik, Form } from 'formik';
import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';
import { TextFieldComponent } from 'common/components';
import { Button } from '@material-ui/core';
import * as classes from './pager.styles';
import Typography from '@material-ui/core/Typography';

interface Props {
  totalPages: number;
  currentPage: number;
  onPageSelected: (newPage: number) => void;
}

interface Model {
    currentPage: number
}

const validationSchema: ValidationSchema = {
  field: {
    currentPage: [Validators.required],
  },
};

const formValidation = createFormikValidation(validationSchema);

export const Pager: React.FunctionComponent<Props> = (props) => {
  const { totalPages, currentPage, onPageSelected } = props;
  const model = { currentPage };

  const onGoToPage = (model: Model): void => {
    if (model.currentPage >= 1 && model.currentPage <= totalPages) {
      onPageSelected(model.currentPage);
    }
  };

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onPageSelected(1)}
        className={classes.button}
      >
        |&lt;
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onPageSelected(Math.max(1, currentPage - 1))}
        className={classes.button}
      >
        &lt;&lt;
      </Button>
      <Formik
        onSubmit={onGoToPage}
        initialValues={model}
        enableReinitialize={true}
        validate={formValidation.validateForm}
      >
        <Form className={classes.form}>
          <TextFieldComponent
            className={classes.pageNumber}
            name="currentPage"
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
          >
            Go to Page
          </Button>
          <Typography variant="subtitle1" gutterBottom>
            out of {totalPages}
          </Typography>
        </Form>
      </Formik>
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          onPageSelected(Math.min(totalPages, currentPage + 1))
        }
        className={classes.button}
      >
        &gt;&gt;
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onPageSelected(totalPages)}
        className={classes.button}
      >
        &gt;|
      </Button>
    </div>
  );
};
