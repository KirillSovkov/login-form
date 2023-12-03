import React from 'react';
import { Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { changeEmailValue } from '../../../store/loginSlice';

function MailInput() {

   const email = useSelector((state) => state.login.email);
   const dispatch = useDispatch();

   const handleChange = (event) => {
      dispatch(changeEmailValue(event.target.value))
   };

   return (
      <Form.Item 
         name='email'
         label='E-mail'
         rules={[
            {
               required: true,
               message: 'It can`t be empty',
               
            },
            {  
               type: 'email',
               message: 'Wrong e-mail format'
            }
         ]}
      >
         <Input 
            placeholder='example@youmail.com'
            value={email}
            onChange={handleChange}
         />
      </Form.Item>
   );
}

export default MailInput;