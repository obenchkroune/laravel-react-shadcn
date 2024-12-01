import AuthenticatedLayout from "~/components/layouts/authenticated-layout";
import { Card, CardContent } from "~/components/ui/card";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />

      <Card className="pt-6">
        <CardContent>
          <div className="text-foreground">You're logged in!</div>
        </CardContent>
      </Card>
    </AuthenticatedLayout>
  );
}
