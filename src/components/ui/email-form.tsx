import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Button } from './button';


interface Values {
  email: string;
}

export const EmailForm: React.FC = () => {
  return (
    <Formik
      initialValues={{ email: ''}}
      onSubmit={(
        values: Values,
        { setSubmitting }: FormikHelpers<Values>
      ) => {
        console.log(values.email);
        setSubmitting(false);
      }}
    >
      <Form
        className="flex flex-col w-full md:flex-row space-y-4 md:space-y-0 md:space-x-4"
      >
        <Field
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="email"
          name="email"
          placeholder="youremail@here.com"
          type="email"
        />

        <Button className="w-full md:w-1/3" type="submit">Join Waitlist</Button>
      </Form>
    </Formik>
  )
}