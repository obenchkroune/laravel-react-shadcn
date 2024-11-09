import ApplicationLogo from '~/components/application-logo';
import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '~/components/ui/navigation-menu';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, useState } from 'react';
import { ChevronDown, LogOut, Menu, User, X } from 'lucide-react';
import { cn } from '~/lib/utils';

export default function Authenticated({ children }: PropsWithChildren) {
  const user = usePage().props.auth.user;
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

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
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <Link
                        href={route('dashboard')}
                        className={cn(
                          'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50',
                          route().current('dashboard') && 'bg-accent/50'
                        )}
                      >
                        Dashboard
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>

            <div className='hidden sm:ml-6 sm:flex sm:items-center'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='ghost' className='flex items-center'>
                    {user.name}
                    <ChevronDown className='ml-2 h-4 w-4' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-56'>
                  <DropdownMenuItem className='py-2' asChild>
                    <Link href={route('profile.edit')}>
                      <User />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className='w-full py-2' asChild>
                    <Link as='button' href={route('logout')} method='post'>
                      <LogOut />
                      <span>Log Out</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className='flex items-center sm:hidden'>
              <Button
                variant='ghost'
                size='icon'
                onClick={() => setShowingNavigationDropdown((prev) => !prev)}
              >
                {showingNavigationDropdown ? (
                  <X className='h-6 w-6' />
                ) : (
                  <Menu className='h-6 w-6' />
                )}
              </Button>
            </div>
          </div>
        </div>

        <div
          className={cn('sm:hidden', !showingNavigationDropdown && 'hidden')}
        >
          <div className='space-y-1 pb-3 pt-2'>
            <Link
              href={route('dashboard')}
              className={cn(
                'block w-full px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                route().current('dashboard') && 'bg-accent/50'
              )}
            >
              Dashboard
            </Link>
          </div>

          <div className='border-t border-border pb-1 pt-4'>
            <div className='px-4'>
              <div className='text-base font-medium text-foreground'>
                {user.name}
              </div>
              <div className='text-sm font-medium text-muted-foreground'>
                {user.email}
              </div>
            </div>

            <div className='mt-3 space-y-1'>
              <Link
                href={route('profile.edit')}
                className='flex gap-4 px-4 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground'
              >
                Profile
              </Link>
              <Link
                as='button'
                href={route('logout')}
                method='post'
                className='flex gap-4 w-full px-4 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground'
              >
                Log Out
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8'>
        {children}
      </main>
    </div>
  );
}
