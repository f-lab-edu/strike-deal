import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
    component: Main,
});

function Main() {
    return (
        <div>
            <h3>Main Page</h3>
        </div>
    );
}
