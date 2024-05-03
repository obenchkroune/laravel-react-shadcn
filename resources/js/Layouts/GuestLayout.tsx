import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
  return (
    <div className='min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100'>
      <div className='mb-8'>
        <Link href='/'>
          <h1>App logo</h1>
        </Link>
      </div>

      <Card className='w-full sm:max-w-md'>
        <CardContent className='pt-6'>{children}</CardContent>
      </Card>
    </div>
  );
}
