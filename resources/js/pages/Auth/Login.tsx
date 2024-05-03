import { useEffect, FormEventHandler } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import GuestLayout from '@/Layouts/GuestLayout';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

export default function Login({
  status,
  canResetPassword,
}: {
  status?: string;
  canResetPassword: boolean;
}) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('login'));
  };

  return (
    <GuestLayout>
      <Head title='Log in' />

      {status && (
        <div className='mb-4 font-medium text-sm text-green-600'>{status}</div>
      )}

      <form onSubmit={submit} className='space-y-4'>
        <div>
          <Label htmlFor='email'>Email</Label>

          <Input
            id='email'
            type='email'
            name='email'
            value={data.email}
            className='mt-1 block w-full'
            autoComplete='username'
            onChange={(e) => setData('email', e.target.value)}
            autoFocus
          />

          <InputError message={errors.email} className='mt-2' />
        </div>

        <div>
          <Label htmlFor='password'>Password</Label>

          <Input
            id='password'
            type='password'
            name='password'
            value={data.password}
            className='mt-1 block w-full'
            autoComplete='current-password'
            onChange={(e) => setData('password', e.target.value)}
          />

          <InputError message={errors.password} className='mt-2' />
        </div>

        <div className='flex items-center space-x-2'>
          <Checkbox
            id='remember'
            checked={data.remember}
            onClick={() => setData('remember', !data.remember)}
          />
          <Label className='cursor-pointer' htmlFor='remember'>
            Remember me
          </Label>
        </div>

        <div className='flex items-center justify-end mt-4'>
          {canResetPassword && (
            <Button variant='link' asChild>
              <Link href={route('password.request')}>
                Forgot your password?
              </Link>
            </Button>
          )}

          <Button className='ms-4' disabled={processing}>
            Log in
          </Button>
        </div>
      </form>
    </GuestLayout>
  );
}
