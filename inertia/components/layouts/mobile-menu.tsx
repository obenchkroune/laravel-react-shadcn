import { InertiaLinkProps, Link, usePage } from "@inertiajs/react";
import { cn } from "~/lib/utils";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "~/components/ui/drawer";
import { NavigationLink } from "./authenticated-layout";

function MobileMenuButton({
  children,
  className,
  current = false,
  ...props
}: InertiaLinkProps & { current?: boolean }) {
  return (
    <Link
      className={cn(
        "text-start block w-full px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md",
        current && "bg-accent/50",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

type MobileMenuProps = {
  links: NavigationLink[];
  toggle: () => void;
  show: boolean;
};

export function MobileMenu({ links, toggle, show }: MobileMenuProps) {
  const user = usePage().props.auth.user;

  return (
    <Drawer open={show} onClose={toggle}>
      <DrawerContent className="h-[90%]">
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
        </DrawerHeader>
        <div className="px-4">
          <div className="space-y-1 pb-3">
            {links.map((link) => (
              <MobileMenuButton
                onClick={() => toggle()}
                key={link.href}
                href={link.href}
                current={link.current}
              >
                {link.label}
              </MobileMenuButton>
            ))}
          </div>

          <div className="border-t border-border pb-1 pt-4">
            <div>
              <div className="text-base font-medium text-foreground">
                {user.name}
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                {user.email}
              </div>
            </div>

            <div className="mt-3 space-y-1">
              <MobileMenuButton
                onClick={() => toggle()}
                href={route("profile.edit")}
                current={route().current("profile.edit")}
              >
                Profile
              </MobileMenuButton>
              <MobileMenuButton
                onClick={() => toggle()}
                as="button"
                href={route("logout")}
                method="post"
              >
                Log Out
              </MobileMenuButton>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
