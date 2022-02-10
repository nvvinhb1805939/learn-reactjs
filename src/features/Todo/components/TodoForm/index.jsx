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
  // const form = useForm({
  //   defaultValues: {
  //     title: '',
  //   },
  // });
  // console.log('form', form);
  // const [value, setValue] = useState("");
  // const handleInput = e => {
  //   setValue(e.target.value);
  // };
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (!onSubmit) return;
  //   const formValues = {
  //     id: Math.floor(Math.random() * 9999),
  //     action: value,
  //     status: "new",
  //   };
  //   onSubmit(formValues);
  //   setValue("");
  // };

  const schema = yup
    .object({
      todo: yup.string().required('Please fill todo!'),
    })
    .required();
  const { formState, handleSubmit, control } = useForm({
    defaultValues: {
      todo: '',
    },
    resolver: yupResolver(schema),
  });
  const handleFormSubmit = formValues => {
    console.log('submit', formValues);
    // onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <InputField formState={formState} control={control} name='todo' label='New Todo' />
    </form>
  );
}

export default TodoForm;
