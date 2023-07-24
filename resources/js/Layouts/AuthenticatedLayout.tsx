import { PropsWithChildren } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/Components/ui/sheet';
import { Link, usePage } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/Components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';
import { BellIcon, DollarSignIcon, LifeBuoyIcon, LogOutIcon, MegaphoneIcon, MenuIcon, UserIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/Components/ui/tooltip';
import { PageProps } from '@/types';

type NavLink = {
    label: string;
    href: string;
    current: boolean;
};

export default function AuthenticatedLayout({ children }: PropsWithChildren) {
    const user = usePage<PageProps>().props.auth.user;
    const links: NavLink[] = [
        {
            label: 'Dashboard',
            href: route('dashboard'),
            current: route().current('dashboard'),
        },
    ];

    return (
        <div className='min-h-screen'>
            <nav className='py-4 border-b bg-background/90 backdrop-blur sticky top-0 z-30'>
                <div className='container flex justify-between lg:justify-normal items-center gap-6'>
                    {/* Mobile menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant='outline' className='p-0 h-10 w-10 lg:hidden flex'>
                                <MenuIcon className='h-5 w-5' />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side='left'>
                            <SheetHeader>Navigation Menu</SheetHeader>
                            <div className='flex flex-col gap-0.5 mt-8'>
                                {links.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className={cn(
                                            'block w-full text-sm font-medium text-muted-foreground/80 hover:text-muted-foreground hover:bg-muted/50 transition-colors py-3 px-5 my-1 rounded-lg',
                                            link.current && 'text-foreground bg-muted pointer-events-none',
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                    <ApplicationLogo className='h-8 w-auto text-foreground fill-current' />
                    <div className='flex lg:flex-1 items-center'>
                        {/* Desktop Menu */}
                        <div className='hidden lg:flex items-center gap-6'>
                            {links.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={cn(
                                        'text-sm font-medium text-muted-foreground/50 hover:text-muted-foreground transition-colors',
                                        link.current && 'text-foreground pointer-events-none',
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <div className='ms-auto flex items-center gap-6'>
                            <TooltipProvider>
                                <Tooltip delayDuration={100}>
                                    <TooltipTrigger asChild>
                                        <Link href={route('user-notifications.index')}>
                                            <BellIcon className='h-5 w-5 me-2' />
                                            <span className='sr-only'>Notifications</span>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className='text-muted-foreground'>Notifications</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            {/* User Dropdown */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar className='cursor-pointer'>
                                        <AvatarImage src={user.image_url} />
                                        <AvatarFallback>{user.name.slice(0, 1)}</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className='w-48' align='end'>
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem asChild>
                                            <Link href={route('profile.edit')}>
                                                <UserIcon className='h-5 w-5 me-2' />
                                                <span>Profile</span>
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href='#'>
                                                <DollarSignIcon className='h-5 w-5 me-2' />
                                                <span>Balance</span>
                                            </Link>
                                        </DropdownMenuItem>

                                        <DropdownMenuSeparator />

                                        <DropdownMenuItem asChild>
                                            <Link href='#'>
                                                <LifeBuoyIcon className='h-5 w-5 me-2' />
                                                <span>Help</span>
                                            </Link>
                                        </DropdownMenuItem>

                                        <DropdownMenuItem asChild>
                                            <Link href='#'>
                                                <MegaphoneIcon className='h-5 w-5 me-2' />
                                                <span>Disputes</span>
                                            </Link>
                                        </DropdownMenuItem>

                                        <DropdownMenuSeparator />

                                        <DropdownMenuItem asChild>
                                            <Link
                                                className='w-full text-start'
                                                href={route('logout')}
                                                method='post'
                                                as='button'
                                            >
                                                <LogOutIcon className='h-5 w-5 me-2' />
                                                <span>Logout</span>
                                            </Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </nav>

            <main className='py-12'>{children}</main>
        </div>
    );
}
