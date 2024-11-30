import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ApplicationLogo from '~/components/application-logo';
import { Button } from '~/components/ui/button';
import { Navigation } from './navigation';
import { UserDropdown } from './user-dropdown';
import { MobileMenu } from './mobile-menu';
import { useToggle } from '@uidotdev/usehooks';

export type NavigationLink = {
    label: string;
    href: string;
    current: boolean;
};

export default function Authenticated({ children }: PropsWithChildren) {
    const links: NavigationLink[] = [
        {
            label: 'Dashboard',
            href: route('dashboard'),
            current: route().current('dashboard'),
        },
        {
            label: 'Todos',
            href: route('todos.index'),
            current: route().current('todos.index'),
        },
    ];

    const user = usePage().props.auth.user;
    const [isDropdownOpen, toggleDropdown] = useToggle(false);

    return (
        <div className='min-h-screen bg-background'>
            <nav className='border-b border-border bg-background'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='flex h-20 justify-between'>
                        <div className='flex'>
                            <div className='flex shrink-0 items-center'>
                                <Link href='/'>
                                    <ApplicationLogo className='block h-9 w-auto fill-current text-foreground' />
                                </Link>
                            </div>

                            <div className='hidden sm:ml-10 sm:flex'>
                                <Navigation links={links} />
                            </div>
                        </div>

                        <div className='hidden sm:ml-6 sm:flex sm:items-center'>
                            <UserDropdown user={user} />
                        </div>

                        <div className='flex items-center sm:hidden'>
                            <Button
                                variant='ghost'
                                size='icon'
                                onClick={() => toggleDropdown()}
                            >
                                {isDropdownOpen ? (
                                    <X className='h-6 w-6' />
                                ) : (
                                    <Menu className='h-6 w-6' />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>

                <MobileMenu
                    toggle={toggleDropdown}
                    show={isDropdownOpen}
                    links={links}
                />
            </nav>

            <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8'>
                {children}
            </main>
        </div>
    );
}
