import ApplicationLogo from "~/components/application-logo";
import { Card, CardContent } from "~/components/ui/card";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen pt-6 sm:pt-0 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto mt-24 space-y-4">
        <div className="flex justify-center">
          <Link href="/">
            <ApplicationLogo className="h-20 w-20 fill-current text-foreground" />
          </Link>
        </div>

        <Card className="pt-6">
          <CardContent>{children}</CardContent>
        </Card>
      </div>
    </div>
  );
}
