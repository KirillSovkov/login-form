import React from 'react';
import { Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { changePasswordValue } from '../../../store/loginSlice';

function PasswordInput() {

   const password = useSelector((state) => state.login.password);
   const dispatch = useDispatch();

   const handleChange = (event) => {
      dispatch(changePasswordValue(event.target.value))
   };

   return (
      <Form.Item
         name='password'
         label='Password'
         rules={[
            {
               required: true,
               message: 'It can`t be empty'
            }
         ]}
      >
         <Input.Password 
            value={password}
            onChange={handleChange}
         />
      </Form.Item>
   );
}

export default PasswordInput;