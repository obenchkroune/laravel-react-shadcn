import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import GuestLayout from "~/components/layouts/guest-layout";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function ForgotPassword({ status }: { status?: string }) {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("password.email"));
  };

  return (
    <GuestLayout>
      <Head title="Forgot Password" />

      <div className="mb-4 text-sm text-muted-foreground">
        Forgot your password? No problem. Just let us know your email address
        and we will email you a password reset link that will allow you to
        choose a new one.
      </div>

      {status && (
        <div className="mb-4 text-sm font-medium text-green-500">{status}</div>
      )}

      <form onSubmit={submit}>
        <Input
          id="email"
          type="email"
          name="email"
          value={data.email}
          className="mt-1 block w-full"
          onChange={(e) => setData("email", e.target.value)}
          error={errors.email}
          autoFocus
        />

        <div className="mt-4 flex items-center justify-end">
          <Button className="ms-4" loading={processing}>
            Email Password Reset Link
          </Button>
        </div>
      </form>
    </GuestLayout>
  );
}
