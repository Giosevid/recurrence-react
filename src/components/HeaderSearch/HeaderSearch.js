import React from 'react';
import {useFormik} from 'formik';
import {TextField, Button} from '@material-ui/core';
import {validateInputFild} from '../../utils/validations';
import './HeaderSearch.scss';

export default function HeaderSearch() {
  const {handleChange, values, handleSubmit, errors} = useFormik({
    initialValues: {
      urlInput: ''
    },
    onSubmit: ({ urlInput }) => {
      console.log(urlInput)
    },
    validate: validateInputFild
  });

  console.log(errors)

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField value={values.inputUrl} name="urlInput" onChange={handleChange} id="outlined-basic" label="Outlined" variant="outlined" />
        <Button type="submit" variant="outlined" size="large">Default</Button>
        {errors.urlInput &&  <div>{errors.urlInput}</div>}
      </form>
    </>
  )
}
