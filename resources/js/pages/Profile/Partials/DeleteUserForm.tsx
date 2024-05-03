import { useRef, FormEventHandler } from 'react';
import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputError from '@/components/input-error';

export default function DeleteUserForm({
  className = '',
}: {
  className?: string;
}) {
  const passwordInput = useRef<HTMLInputElement>(null);

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

  const deleteUser: FormEventHandler = (e) => {
    e.preventDefault();

    destroy(route('profile.destroy'), {
      preserveScroll: true,
      onError: () => passwordInput.current?.focus(),
      onFinish: () => reset(),
    });
  };

  return (
    <section className={`space-y-6 ${className}`}>
      <header>
        <h2 className='text-lg font-medium'>Delete Account</h2>

        <p className='mt-1 text-sm text-muted-foreground'>
          Once your account is deleted, all of its resources and data will be
          permanently deleted. Before deleting your account, please download any
          data or information that you wish to retain.
        </p>
      </header>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant='destructive'>Delete Account</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Are you sure you want to delete your account?
            </DialogTitle>
            <DialogDescription>
              Once your account is deleted, all of its resources and data will
              be permanently deleted. Please enter your password to confirm you
              would like to permanently delete your account.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={deleteUser}>
            <div className='mt-6'>
              <Label htmlFor='password' className='sr-only'>
                Password
              </Label>

              <Input
                id='password'
                type='password'
                name='password'
                ref={passwordInput}
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                placeholder='Password'
                autoFocus
              />

              <InputError message={errors.password} className='mt-2' />
            </div>

            <div className='mt-6 flex justify-end'>
              <DialogClose asChild>
                <Button type='button' variant='secondary'>
                  Cancel
                </Button>
              </DialogClose>

              <Button
                type='submit'
                variant='destructive'
                className='ms-3'
                disabled={processing}
              >
                Delete Account
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
