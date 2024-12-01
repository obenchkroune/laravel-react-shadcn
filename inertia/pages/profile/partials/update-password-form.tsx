import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { useToast } from "~/hooks/use-toast";

export default function UpdatePasswordForm() {
  const passwordInput = useRef<HTMLInputElement>(null);
  const currentPasswordInput = useRef<HTMLInputElement>(null);

  const { toast } = useToast();
  const { data, setData, errors, put, reset, processing } = useForm({
    current_password: "",
    password: "",
    password_confirmation: "",
  });

  const updatePassword: FormEventHandler = (e) => {
    e.preventDefault();

    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        toast({
          title: "Password Updated",
          description: "Your password has been updated.",
        });
      },
      onError: (errors) => {
        if (errors.password) {
          reset("password", "password_confirmation");
          passwordInput.current?.focus();
        }

        if (errors.current_password) {
          reset("current_password");
          currentPasswordInput.current?.focus();
        }
      },
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Update Password</CardTitle>

        <CardDescription className="mt-1 text-sm text-muted-foreground">
          Ensure your account is using a long, random password to stay secure.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={updatePassword} className="space-y-6 max-w-xl">
          <div className="space-y-2">
            <Label htmlFor="current_password">Current Password</Label>
            <Input
              id="current_password"
              ref={currentPasswordInput}
              type="password"
              name="current_password"
              value={data.current_password}
              onChange={(e) => setData("current_password", e.target.value)}
              autoComplete="current-password"
              error={errors.current_password}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">New Password</Label>
            <Input
              id="password"
              ref={passwordInput}
              type="password"
              name="password"
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
              autoComplete="new-password"
              error={errors.password}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password_confirmation">Confirm Password</Label>
            <Input
              id="password_confirmation"
              type="password"
              name="password_confirmation"
              value={data.password_confirmation}
              onChange={(e) => setData("password_confirmation", e.target.value)}
              autoComplete="new-password"
              error={errors.password_confirmation}
            />
          </div>

          <div className="flex items-center gap-4">
            <Button loading={processing}>Save</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
