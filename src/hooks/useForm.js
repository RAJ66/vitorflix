import { useState } from 'react'

function useForm(startValues) {
  const [values, setValues] = useState(startValues);
  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    setValue(event.target.getAttribute('name'), event.target.value);
  }

  function clearForm() {
    setValues(startValues)
  }

  return {
    values,
    handleChange, clearForm
  }
}

export default useForm