import { writable, derived } from "svelte/store";

export const svelteForm = conf => {
  const initValues = conf.initialValues;

  const form = writable(initValues);
  const errors = writable({});
  const touched = writable({});

  const handleChange = e => {
    const {
      target: { name, value }
    } = e;

    form.update(f => ({
      ...f,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    form.subscribe(values => console.log("values", values));
  };

  return {
    form,
    errors,
    touched,
    handleChange,
    state: derived([form], $form => $form),
    handleSubmit
  };
};
