import { useCallback, useState } from 'react';

function useFormValitate() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChanges(e) {
    const input = e.target;
    const value = input.value;
    const name = input.name;
    
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(input.closest('form').checkValidity());

    if (name === 'password') {
      if (!input.checkValidity()) {
        setErrors({ ...errors, [name]: 'Минимальная длина пароля: 6 символов' });
      } else {
        setErrors({ ...errors, [name]: '' });
      }
    }
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );
  
  return {
    values,
    errors,
    isValid,
    handleChanges,
    resetForm,
  }
}

export default useFormValitate;