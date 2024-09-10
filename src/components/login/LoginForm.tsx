import React from 'react';
import { Form, Button, Input } from 'antd';
import type { FormProps } from 'antd';

function LoginForm() {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values:', values);
    };

    return (
        <Form
            style={{ maxWidth: 600 }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            form={form}
            onFinish={onFinish}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    로그인
                </Button>
            </Form.Item>
        </Form>
    );
}

export default LoginForm;
