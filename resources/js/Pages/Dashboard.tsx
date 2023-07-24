import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Card, CardContent } from '@/Components/ui/card';

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout>
            <Head title='Dashboard' />

            <div className='container'>
                <Card>
                    <CardContent className='p-6'>
                        <p>you are logged in!</p>
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
