import React from 'react';

export default function useForm() {
  const [values, setValues] = React.useState({});

  const handleChange = (event) => {
    const {value, name} = event.target;
    setValues({...values, [name]: value});
  };

  return {values, handleChange, setValues};
}

