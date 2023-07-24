import { FormEventHandler, useRef, useState } from 'react';
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Label } from '@/Components/ui/label';
import { Input } from '@/Components/ui/input';
import { AlertTriangleIcon } from 'lucide-react';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/Components/ui/alert-dialog';

export default function DeleteUserForm({ className = '' }: { className?: string }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <Card className='space-y-6'>
            <CardHeader>
                <CardTitle>Delete Account</CardTitle>

                <CardDescription className='max-w-2xl'>
                    Once your account is deleted, all of its resources and data will be permanently deleted. Before
                    deleting your account, please download any data or information that you wish to retain.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <AlertDialog open={confirmingUserDeletion} onOpenChange={setConfirmingUserDeletion}>
                    <AlertDialogTrigger asChild>
                        <Button variant='destructive'>
                            <AlertTriangleIcon className='h-5 w-5 me-2' />
                            <span>Delete Account</span>
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className='w-full max-w-xl'>
                        <form onSubmit={deleteUser}>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you sure you want to delete your account?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Once your account is deleted, all of its resources and data will be permanently
                                    deleted. Please enter your password to confirm you would like to permanently delete
                                    your account.
                                </AlertDialogDescription>
                            </AlertDialogHeader>

                            <div className='my-6'>
                                <Label htmlFor='password' className='sr-only'>
                                    Password
                                </Label>

                                <Input
                                    id='password'
                                    type='password'
                                    name='password'
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    className='mt-1 block w-full'
                                    placeholder='Password'
                                />

                                <InputError message={errors.password} className='mt-2' />
                            </div>

                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>

                                <Button type='submit' variant='destructive' className='ml-3' disabled={processing}>
                                    <AlertTriangleIcon className='h-4 w-4 me-2' />
                                    <span>Delete Account</span>
                                </Button>
                            </AlertDialogFooter>
                        </form>
                    </AlertDialogContent>
                </AlertDialog>
            </CardContent>
        </Card>
    );
}
