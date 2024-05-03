import { useState, PropsWithChildren, ReactNode } from 'react';
import { Link } from '@inertiajs/react';
import { User } from '@/types';
import { Button } from '@/components/ui/button';
import {
  CircleUser,
  LogOut,
  Menu,
  Package2,
  PowerOff,
  Search,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/utils';

export default function Authenticated({
  user,
  header,
  children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  return (
    <div className='flex min-h-screen w-full flex-col'>
      <header className='sticky flex items-center top-0 inset-x-0 h-16 border-b bg-background px-4 md:px-6'>
        <div className='flex container w-full'>
          <nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
            <Link
              href='/'
              className='flex items-center gap-2 text-lg font-semibold md:text-base'
            >
              <Package2 className='h-6 w-6' />
              <span className='sr-only'>Acme Inc</span>
            </Link>
            <Link
              href={route('dashboard')}
              className={cn(
                route().current('dashboard')
                  ? 'text-foreground transition-colors hover:text-foreground'
                  : 'text-muted-foreground transition-colors hover:text-foreground'
              )}
            >
              Dashboard
            </Link>
            <Link
              href={route('profile.edit')}
              className={cn(
                route().current('profile.edit')
                  ? 'text-foreground transition-colors hover:text-foreground'
                  : 'text-muted-foreground transition-colors hover:text-foreground'
              )}
            >
              Profile
            </Link>
            <Link
              href='#'
              className='text-muted-foreground transition-colors hover:text-foreground'
            >
              Products
            </Link>
            <Link
              href='#'
              className='text-muted-foreground transition-colors hover:text-foreground'
            >
              Customers
            </Link>
            <Link
              href='#'
              className='text-muted-foreground transition-colors hover:text-foreground'
            >
              Analytics
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant='outline'
                size='icon'
                className='shrink-0 md:hidden'
              >
                <Menu className='h-5 w-5' />
                <span className='sr-only'>Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='left'>
              <nav className='grid gap-6 text-lg font-medium'>
                <Link
                  href='#'
                  className='flex items-center gap-2 text-lg font-semibold'
                >
                  <Package2 className='h-6 w-6' />
                  <span className='sr-only'>Acme Inc</span>
                </Link>
                <Link href='#' className='hover:text-foreground'>
                  Dashboard
                </Link>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Orders
                </Link>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Products
                </Link>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Customers
                </Link>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Analytics
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className='flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
            <Button variant='destructive' className='ms-auto'>
              <PowerOff className='h-5 w-5 me-3' />
              Logout
            </Button>
          </div>
        </div>
      </header>
      <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 container'>
        {children}
      </main>
    </div>
  );
}
