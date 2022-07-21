import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField,Grid } from '@material-ui/core';


function FormInput({ name, label, require}) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        render={({ field}) => <TextField {...field} required={require} placeholder={label} label={label} />}
        control={control}
        name={name}
        fullWidth
       rules={{required:true}}
        error={isError}

      />
    </Grid>
  );
}

export default FormInput;