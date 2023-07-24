import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { ArrowRightCircle, PlusIcon } from 'lucide-react';
import { Separator } from '@/Components/ui/separator';

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout>
            <Head title='Dashboard' />

            <div className='container'>
                <div className='flex justify-end mb-8'>
                    <Button asChild>
                        <Link href='#'>
                            <PlusIcon className='h-5 w-5 me-2' />
                            <span>Create new bill</span>
                        </Link>
                    </Button>
                </div>

                {/* Stats */}
                <div className='grid sm:grid-cols-2 lg:grid-cols-3'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Total bills</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>5 bills</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
