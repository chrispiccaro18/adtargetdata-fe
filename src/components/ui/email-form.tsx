import React, { useState } from 'react';
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import { Button } from './button';

const FORM_URL = 'https://app.loops.so/api/newsletter-form/cm49xdi9c047ru2fio7ktmpgy';

interface Values {
  email: string;
}

export const EmailForm: React.FC = () => {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = async (email: string): Promise<void> => {
    try {
      const formBody = `mailingLists=${encodeURIComponent('cm4a26h8801920ljr22azata4')}&email=${encodeURIComponent(email)}`;
      const response = await fetch(FORM_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody,
      });

      if (response.ok) {
        setStatusMessage('Email added to the waitlist successfully!');
      } else {
        setStatusMessage('Failed to add email to the list.');
      }
    } catch (error) {
      console.error(error);
      setStatusMessage('An unexpected error occurred.');
    }
  };

  const validateEmail = (value: string) => {
    let error;
    if (!value) {
      error = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  };

  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={async (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        await handleSubmit(values.email);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col w-full md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Field
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="email"
            name="email"
            placeholder="youremail@here.com"
            type="email"
            validate={validateEmail}
          />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

          <Button className="w-full md:w-1/3" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : `Discover What's Coming`}
          </Button>

          {statusMessage && <div className="text-sm text-green-500">{statusMessage}</div>}
        </Form>
      )}
    </Formik>
  );
};
