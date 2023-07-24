import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import { Card, CardContent } from '@/Components/ui/card';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className='min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0'>
            <div>
                <Link href='/'>
                    <ApplicationLogo className='w-20 h-20 fill-current text-gray-500' />
                </Link>
            </div>

            <Card className='w-full sm:max-w-lg mt-6 pt-6'>
                <CardContent>{children}</CardContent>
            </Card>
        </div>
    );
}
