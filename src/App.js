import React from 'react';
import { Formik, Form } from 'formik';

import './App.css';
import Input from "./component/Input";
import validation from "./function/validation";

const App = () => {

  const initValue = {
    shopName: '',
    ownerName: '',
    ownerEmail: '',
    telephone: '',
  }

  const handleSubmitData = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Formik
          initialValues={initValue}
          validationSchema={validation}
          onSubmit={handleSubmitData}
        >
          {({ isSubmitting, errors }) => {
            return (
              <Form>
                <Input error={errors} name='shopName' label='Shope Name' disabled={isSubmitting}/>
                <Input error={errors} name='ownerName' label='Owner Name' disabled={isSubmitting}/>
                <Input error={errors} name='ownerEmail' label='Owner Email' disabled={isSubmitting}/>
                <Input error={errors} name='telephone' label='Telephone' disabled={isSubmitting}/>

                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </header>
    </div>
  );
}

export default App;
