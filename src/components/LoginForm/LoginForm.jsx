import React from 'react';
import { ConfigProvider, Card, Form, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { MailInput, PasswordInput } from '../../components/LoginForm/index';
import { onFinish } from '../../store/loginSlice';

function LoginForm() {

   const dispatch = useDispatch();

    return (
         <div style={{ width: 360, margin: '70px auto' }}>
            <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Login <span style={{ color: '#8cb369' }}>Form</span></h1>
            <ConfigProvider
               theme={{
                  components: {
                     Input: {
                        colorPrimary: '#8cb369',
                        algorithm: true,
                     },
                     Button: {
                        colorPrimary:'#8cb369',
                        algorithm: true,
                     }
                  }
               }}
            >
               <Card style={{ background: '#fbfefb' }}>
                  <Form 
                     size='middle'
                     layout='vertical'
                     onFinish={() => dispatch(onFinish())}
                  >
                     <MailInput />
                     <PasswordInput />
                     <Form.Item>
                        <Button 
                           type='primary'
                           htmlType='submit'
                        >
                           Login
                        </Button>
                     </Form.Item>
                  </Form>
               </Card>
            </ConfigProvider>
         </div>
    );
}

export default LoginForm;