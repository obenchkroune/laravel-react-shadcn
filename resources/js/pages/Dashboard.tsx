import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Card, CardContent } from '@/components/ui/card';

export default function Dashboard({ auth }: PageProps) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
          Dashboard
        </h2>
      }
    >
      <Head title='Dashboard' />

      <Card>
        <CardContent className='pt-6'>
          <p>You're logged in!</p>
        </CardContent>
      </Card>
    </AuthenticatedLayout>
  );
}
