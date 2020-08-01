import React from 'react';
import {useFormik} from 'formik';
import {TextField, Button} from '@material-ui/core';
import {validateInputFild} from '../../utils/validations';
import Grid from '@material-ui/core/Grid';
import './HeaderSearch.scss';

export default function HeaderSearch({setUrl}) {
  const {handleChange, values, handleSubmit, errors} = useFormik({
    initialValues: {
      urlInput: ''
    },
    onSubmit: ({ urlInput }) => {
      setUrl(urlInput)
    },
    validate: validateInputFild
  });

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div div className="container">
          <h1>Arbol de directorios</h1>
          <Grid container direction="row" justify="space-around" alignItems="center" spacing={3}>
            <Grid item xs={12} sm={9}>
              <TextField
                error={errors.urlInput}
                value={values.inputUrl}
                name="urlInput"
                fullWidth
                onChange={handleChange}
                id="outlined-basic"
                variant="outlined"
                label={errors.urlInput}
                defaultValue="Introducir Url"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Button color="primary" type="submit" variant="outlined">Default</Button>
            </Grid>
          </Grid>
        </div>
      </form>
    </>
  )
}
