import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};
InputField.defaultProps = {
  label: '',
  disabled: false,
};

function InputField({ formState, control, name, label, disabled }) {
  console.log('errors', formState.errors);
  console.log('touched fields', formState.touchedFields);
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange } }) => (
        <TextField label={label} size='small' color='secondary' disabled={disabled} onChange={onChange} />
      )}
    />
  );
}

export default InputField;
