import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";
import GuestLayout from "~/components/layouts/guest-layout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Login({
  status,
  canResetPassword,
}: {
  status?: string;
  canResetPassword: boolean;
}) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("login"), {
      onFinish: () => reset("password"),
    });
  };

  return (
    <GuestLayout>
      <Head title="Log in" />

      {status && (
        <div className="mb-4 text-sm font-medium text-green-500">{status}</div>
      )}

      <form onSubmit={submit} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>

          <Input
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            onChange={(e) => setData("email", e.target.value)}
            error={errors.email}
            autoFocus
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>

          <Input
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="current-password"
            onChange={(e) => setData("password", e.target.value)}
            error={errors.password}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            name="remember"
            checked={data.remember}
            onCheckedChange={(checked) => setData("remember", checked)}
            id="remember-me"
          />
          <Label htmlFor="remember-me">Remember me</Label>
        </div>

        <div className="flex items-center justify-end">
          {canResetPassword && (
            <Button variant="link" asChild>
              <Link href={route("password.request")}>
                Forgot your password?
              </Link>
            </Button>
          )}

          <Button className="ms-4" loading={processing}>
            Log in
          </Button>
        </div>
      </form>
    </GuestLayout>
  );
}
