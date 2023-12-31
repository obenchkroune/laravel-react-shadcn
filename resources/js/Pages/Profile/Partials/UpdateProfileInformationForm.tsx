import InputError from '@/Components/InputError';
import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { PageProps } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Label } from '@/Components/ui/label';
import { Input } from '@/Components/ui/input';
import { Button } from '@/Components/ui/button';
import { SaveIcon } from 'lucide-react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}: {
    mustVerifyEmail: boolean;
    status?: string;
    className?: string;
}) {
    const user = usePage<PageProps>().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('profile.update'), { preserveScroll: true });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Profile Information</CardTitle>

                <CardDescription className='max-w-2xl'>
                    Update your account's profile information and email address.
                </CardDescription>
            </CardHeader>

            <CardContent className='max-w-2xl'>
                <form onSubmit={submit} className='mt-6 space-y-6'>
                    <div>
                        <Label htmlFor='name'>Name</Label>

                        <Input
                            id='name'
                            className='mt-1 block w-full'
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            autoFocus
                            autoComplete='name'
                        />

                        <InputError className='mt-2' message={errors.name} />
                    </div>

                    <div>
                        <Label htmlFor='email'>Email</Label>

                        <Input
                            id='email'
                            type='email'
                            className='mt-1 block w-full'
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            autoComplete='username'
                        />

                        <InputError className='mt-2' message={errors.email} />
                    </div>

                    {mustVerifyEmail && user.email_verified_at === null && (
                        <div>
                            <p className='text-sm mt-2 text-gray-800'>
                                Your email address is unverified.
                                <Link
                                    href={route('verification.send')}
                                    method='post'
                                    as='button'
                                    className='underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                >
                                    Click here to re-send the verification email.
                                </Link>
                            </p>

                            {status === 'verification-link-sent' && (
                                <div className='mt-2 font-medium text-sm text-green-600'>
                                    A new verification link has been sent to your email address.
                                </div>
                            )}
                        </div>
                    )}

                    <div className='flex items-center gap-4'>
                        <Button disabled={processing}>
                            <SaveIcon className='h-5 w-5 me-2' />
                            <span>Save</span>
                        </Button>

                        {recentlySuccessful && (
                            <p className='text-sm text-muted-foreground animate-in fade-in'>Saved.</p>
                        )}
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
