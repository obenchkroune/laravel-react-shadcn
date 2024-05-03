import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

type Props = {
    message?: string;
} & HTMLAttributes<HTMLParagraphElement>;

export default function InputError({ message, className, ...props }: Props) {
    if (!message) return null;
    return (
        <p className={cn('text-sm text-red-500', className)} {...props}>
            {message}
        </p>
    );
}
