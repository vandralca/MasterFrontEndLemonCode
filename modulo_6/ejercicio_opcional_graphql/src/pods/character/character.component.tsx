import * as React from 'react';
import { Formik, Form } from 'formik';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Character, Comment } from './character.vm';
import * as classes from './character.styles';
import { TextFieldComponent } from 'common/components';
import { Button } from '@material-ui/core';
import { formValidation } from './character.validations';

interface Props {
  character: Character;
  onSaveComment: (comment: Comment) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSaveComment } = props;

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <Card>
          <CardHeader title={character.name} />
          <CardContent>
            <div className={classes.content}>
              <CardMedia
                image={character.image}
                title={character.name}
                style={{ height: 0, paddingTop: '56.25%' }}
              />
              <Typography variant="subtitle1" gutterBottom>
                Estado: {character.status}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Especie: {character.species}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Tipo: {character.type}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Género: {character.gender}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Fecha creación: {character.created}
              </Typography>
            </div>
          </CardContent>
        </Card>

        <div className={classes.formCard}>
          <Card>
            <CardHeader title={`Comentario para ${character.name}`} />
            <CardContent>
              <Formik
                onSubmit={onSaveComment}
                initialValues={character.comment}
                enableReinitialize={true}
                validate={formValidation.validateForm}
              >
                {() => (
                  <Form className={classes.root}>
                    <TextFieldComponent name="author" label="Author" />
                    <TextFieldComponent
                      name="text"
                      label="Text"
                      multiline={true}
                      rows={3}
                      rowsMax={5}
                    />
                    <Button type="submit" variant="contained" color="primary">
                      Save
                    </Button>
                  </Form>
                )}
              </Formik>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
