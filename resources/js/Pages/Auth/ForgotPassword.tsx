import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { CardDescription, CardHeader } from '@/Components/ui/card';
import { Input } from '@/Components/ui/input';
import { Button } from '@/Components/ui/button';

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title='Forgot Password' />

            <CardDescription className='mb-6'>
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one.
            </CardDescription>

            {status && (
                <div className='mb-4 font-medium text-sm text-green-600'>
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <Input
                    id='email'
                    type='email'
                    name='email'
                    value={data.email}
                    className='mt-1 block w-full'
                    onChange={(e) => setData('email', e.target.value)}
                    autoFocus
                />

                <InputError message={errors.email} className='mt-2' />

                <div className='flex items-center justify-end mt-4'>
                    <Button className='ml-4' disabled={processing}>
                        Email Password Reset Link
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
