const { useState } = require('react');

const useForm = (cb) => {
  const [item, setItem] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    cb(item);
  };

  const handleInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  return [handleSubmit, handleInputChange];
};

export default useForm;
