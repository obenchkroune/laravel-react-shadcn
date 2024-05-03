import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { FormEventHandler } from 'react';
import { PageProps } from '@/types';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';

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

  const { data, setData, patch, errors, processing, recentlySuccessful } =
    useForm({
      name: user.name,
      email: user.email,
    });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    patch(route('profile.update'));
  };

  return (
    <section className={className}>
      <header>
        <h2 className='text-lg font-medium'>Profile Information</h2>

        <p className='mt-1 text-sm text-muted-foreground'>
          Update your account's profile information and email address.
        </p>
      </header>

      <form onSubmit={submit} className='mt-6 space-y-6'>
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
              <Button variant='link' className='inline' asChild>
                <Link
                  href={route('verification.send')}
                  method='post'
                  as='button'
                >
                  Click here to re-send the verification email.
                </Link>
              </Button>
            </p>

            {status === 'verification-link-sent' && (
              <div className='mt-2 font-medium text-sm text-green-600'>
                A new verification link has been sent to your email address.
              </div>
            )}
          </div>
        )}

        <div className='flex items-center gap-4'>
          <Button disabled={processing}>Save</Button>

          <Transition
            show={recentlySuccessful}
            enter='transition ease-in-out'
            enterFrom='opacity-0'
            leave='transition ease-in-out'
            leaveTo='opacity-0'
          >
            <p className='text-sm text-gray-600'>Saved.</p>
          </Transition>
        </div>
      </form>
    </section>
  );
}
