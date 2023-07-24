import { useEffect, FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import { Label } from '@/Components/ui/label';
import { Input } from '@/Components/ui/input';
import { Button } from '@/Components/ui/button';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title='Register' />

            <form onSubmit={submit}>
                <div>
                    <Label htmlFor='name'>Name</Label>

                    <Input
                        id='name'
                        name='name'
                        value={data.name}
                        className='mt-1 block w-full'
                        autoComplete='name'
                        onChange={(e) => setData('name', e.target.value)}
                        autoFocus
                        required
                    />

                    <InputError message={errors.name} className='mt-2' />
                </div>

                <div className='mt-4'>
                    <Label htmlFor='email'>Email</Label>

                    <Input
                        id='email'
                        type='email'
                        name='email'
                        value={data.email}
                        className='mt-1 block w-full'
                        autoComplete='username'
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className='mt-2' />
                </div>

                <div className='mt-4'>
                    <Label htmlFor='password'>Password</Label>

                    <Input
                        id='password'
                        type='password'
                        name='password'
                        value={data.password}
                        className='mt-1 block w-full'
                        autoComplete='new-password'
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className='mt-2' />
                </div>

                <div className='mt-4'>
                    <Label htmlFor='password_confirmation'>
                        Confirm Password
                    </Label>

                    <Input
                        id='password_confirmation'
                        type='password'
                        name='password_confirmation'
                        value={data.password_confirmation}
                        className='mt-1 block w-full'
                        autoComplete='new-password'
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className='mt-2'
                    />
                </div>

                <div className='flex items-center justify-end mt-4'>
                    <Button variant='link' asChild>
                        <Link href={route('login')}>Already registered?</Link>
                    </Button>

                    <Button className='ml-4' disabled={processing}>
                        Register
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
