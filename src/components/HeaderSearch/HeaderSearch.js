import React from 'react';
import {useFormik} from 'formik';
import {TextField, Button} from '@material-ui/core';
import {validateInputFild} from '../../utils/validations';
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
        <TextField value={values.inputUrl} name="urlInput" onChange={handleChange} id="outlined-basic" label="Outlined" variant="outlined" />
        <Button type="submit" variant="outlined" size="large">Default</Button>
        {errors.urlInput &&  <div>{errors.urlInput}</div>}
      </form>
    </>
  )
}
