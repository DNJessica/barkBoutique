import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID.replace(/[";]/g, '');
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID.replace(/[";]/g, '');
const USER_ID = process.env.REACT_APP_USER_ID.replace(/[";]/g, '');;

const ContactForm = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        console.log(SERVICE_ID, TEMPLATE_ID, USER_ID)
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

return (
    <div className="send-mail-form">
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='from_email'
          placeholder='Email'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Phone number'
          name='from_phone'
          placeholder='Phone Number'
          required
          icon='phone'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='from_name'
          placeholder='Name'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='message'
          placeholder='Message…'
          required
        />
        <Button type='submit' style={{backgroundColor: 'var(--container-color)'}}>Submit</Button>
      </Form>
    </div>
  );
}

export default ContactForm;