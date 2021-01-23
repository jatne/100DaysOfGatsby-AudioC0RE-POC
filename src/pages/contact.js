import React, { useState } from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { FormiumForm } from '@formium/react';
import { formium } from '../lib/formium';

export default function Contact({data}) {
  const [formSendSuccess, setFormSendSuccess] = useState(false);

  return (
    <Layout>
      {!formSendSuccess &&
      <FormiumForm
        data={data.formiumForm}
        onSubmit={async (values) => {
          await formium.submitForm('audio-c0re', values);
          setFormSendSuccess(true);
        }}
      />
      }
      {formSendSuccess && <div>Thank you for your message!</div>}
    </Layout>
  )
}

export const query = graphql`
  {
    formiumForm(id: { eq: "600c873dd0a32c0001f4a1f2" }) {
      id
      createAt
      name
      projectId
      schema
      slug
      updateAt
      version
    }
  }
`;
