import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/form-controls/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm({ onSubmit }) {
  const schema = yup
    .object({
      action: yup.string().trim().required('Please fill todo!').min(5, 'Todo must larger than 4 character!'),
    })
    .required();
  const { handleSubmit, reset, control } = useForm({
    defaultValues: {
      action: '',
    },
    resolver: yupResolver(schema),
  });
  const handleFormSubmit = formValues => {
    if (onSubmit) {
      onSubmit(formValues);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <InputField control={control} name='action' label='New Todo' />
    </form>
  );
}

export default TodoForm;
