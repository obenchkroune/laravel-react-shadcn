import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Notifications = () => {
    return (
        <AuthenticatedLayout>
            <Head title='Notifications' />
            <div className='container'>
                <h1>Notifications page</h1>
            </div>
        </AuthenticatedLayout>
    );
};

export default Notifications;
