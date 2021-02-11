import React, { useState } from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { FormiumForm, defaultComponents } from '@formium/react';
import { formium } from '../lib/formium';
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea as ChakraTextarea,
  Button
} from '@chakra-ui/react';

const TextInput = props => {
  const {
    id,
    label,
    description,
    ...rest
  } = props;

  return (
    <FormControl id={id}>
      <FormLabel>{label}</FormLabel>
      <Input {...rest} />
      <FormHelperText>{description}</FormHelperText>
    </FormControl>
  )
}

const Textarea = props => {
  const {
    id,
    label,
    description,
    ...rest
  } = props;

  return (
    <FormControl id={id}>
      <FormLabel>{label}</FormLabel>
      <ChakraTextarea {...rest} />
      <FormHelperText>{description}</FormHelperText>
    </FormControl>
  )
}

const SubmitButton = props => {
  return (
    <Button variant="solid" type="submit" {...props} />
  )
}

const myComponent = {
  ...defaultComponents,
  TextInput,
  Textarea,
  SubmitButton,
}

export default function Contact({data}) {
  const [formSendSuccess, setFormSendSuccess] = useState(false);

  return (
    <Layout>
      {!formSendSuccess &&
      <FormiumForm
        data={data.formiumForm}
        components={myComponent}
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
