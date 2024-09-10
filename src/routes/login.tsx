import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { LoginForm } from '../components';

export const Route = createFileRoute('/login')({
    component: Login,
});

function Login() {
    return (
        <div>
            <LoginForm />
        </div>
    );
}
