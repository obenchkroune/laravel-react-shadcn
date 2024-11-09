import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Transition } from "@headlessui/react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";
import { PageProps } from "~/types";

export default function UpdateProfileInformation() {
    const { mustVerifyEmail, status, auth } = usePage<
        PageProps<{
            mustVerifyEmail: boolean;
            status?: string;
        }>
    >().props;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: auth.user.name,
            email: auth.user.email,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg font-medium">
                    Profile Information
                </CardTitle>

                <CardDescription>
                    Update your account's profile information and email address.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <form onSubmit={submit} className="space-y-6 max-w-xl">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                            autoFocus
                            autoComplete="name"
                            error={errors.name}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                            autoComplete="username"
                            error={errors.email}
                        />
                    </div>

                    {mustVerifyEmail &&
                        auth.user.email_verified_at === null && (
                            <div>
                                <p className="mt-2 text-sm text-foreground">
                                    Your email address is unverified.
                                    <Button
                                        variant="link"
                                        asChild
                                        className="px-2"
                                    >
                                        <Link
                                            href={route("verification.send")}
                                            method="post"
                                        >
                                            Click here to re-send the
                                            verification email.
                                        </Link>
                                    </Button>
                                </p>

                                {status === "verification-link-sent" && (
                                    <div className="mt-2 text-sm font-medium text-primary">
                                        A new verification link has been sent to
                                        your email address.
                                    </div>
                                )}
                            </div>
                        )}

                    <div className="flex items-center gap-4">
                        <Button disabled={processing}>Save</Button>

                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm text-muted-foreground">
                                Saved.
                            </p>
                        </Transition>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
