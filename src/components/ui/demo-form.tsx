import React, { useState } from 'react';
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import { Button } from './button';

const FORM_URL = 'https://app.loops.so/api/newsletter-form/cm49xdi9c047ru2fio7ktmpgy';

interface Values {
  email: string;
  brand: string;
  industry: string;
  audience: string;
  website: string;
}

export const DemoForm: React.FC = () => {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = async (values: Values): Promise<void> => {
    try {
      const formBody = new URLSearchParams({
        mailingLists: 'cm4a26h8801920ljr22azata4',
        email: values.email,
        brand: values.brand,
        industry: values.industry,
        audience: values.audience,
        website: values.website,
      }).toString();

      const response = await fetch(FORM_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody,
      });

      if (response.ok) {
        setStatusMessage('Demo request submitted successfully!');
      } else {
        setStatusMessage('Failed to submit demo request.');
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
      initialValues={{ email: '', brand: '', industry: '', audience: '', website: '' }}
      onSubmit={async (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        await handleSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col space-y-4">
          <Field
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            id="email"
            name="email"
            placeholder="youremail@here.com"
            type="email"
            validate={validateEmail}
          />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

          <Field
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            id="brand"
            name="brand"
            placeholder="Your Brand"
            type="text"
          />

          <Field
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            id="industry"
            name="industry"
            placeholder="Industry"
            type="text"
          />

          <Field
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            id="audience"
            name="audience"
            placeholder="Target Audience"
            type="text"
          />

          <Field
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            id="website"
            name="website"
            placeholder="Website"
            type="text"
          />

          <Button className="w-full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Request Demo'}
          </Button>

          {statusMessage && <div className="text-sm text-green-500">{statusMessage}</div>}
        </Form>
      )}
    </Formik>
  );
};
