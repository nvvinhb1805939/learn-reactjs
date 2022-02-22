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

function InputField({ control, name, label, disabled }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, formState: { errors } }) => (
        <TextField
          value={value}
          label={label}
          size='small'
          color='secondary'
          disabled={disabled}
          onChange={onChange}
          error={!!errors[name]}
          helperText={errors[name]?.message}
        />
      )}
    />
  );
}

export default InputField;
