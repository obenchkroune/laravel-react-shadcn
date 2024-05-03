import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Card, CardContent } from '@/components/ui/card';

export default function Edit({
  auth,
  mustVerifyEmail,
  status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
          Profile
        </h2>
      }
    >
      <Head title='Profile' />

      <div className='space-y-6'>
        <Card>
          <CardContent className='pt-6'>
            <UpdateProfileInformationForm
              mustVerifyEmail={mustVerifyEmail}
              status={status}
              className='max-w-xl'
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className='pt-6'>
            <UpdatePasswordForm className='max-w-xl' />
          </CardContent>
        </Card>

        <Card>
          <CardContent className='pt-6'>
            <DeleteUserForm className='max-w-xl' />
          </CardContent>
        </Card>
      </div>
    </AuthenticatedLayout>
  );
}
