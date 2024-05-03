import { useEffect, FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';

export default function ResetPassword({
  token,
  email,
}: {
  token: string;
  email: string;
}) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
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

    post(route('password.store'));
  };

  return (
    <GuestLayout>
      <Head title='Reset Password' />

      <form onSubmit={submit}>
        <div>
          <Label htmlFor='email'>Email</Label>

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
            autoFocus
          />

          <InputError message={errors.password} className='mt-2' />
        </div>

        <div className='mt-4'>
          <Label htmlFor='password_confirmation'>Confirm Password</Label>

          <Input
            type='password'
            name='password_confirmation'
            value={data.password_confirmation}
            className='mt-1 block w-full'
            autoComplete='new-password'
            onChange={(e) => setData('password_confirmation', e.target.value)}
          />

          <InputError message={errors.password_confirmation} className='mt-2' />
        </div>

        <div className='flex items-center justify-end mt-4'>
          <Button className='ms-4' disabled={processing}>
            Reset Password
          </Button>
        </div>
      </form>
    </GuestLayout>
  );
}
