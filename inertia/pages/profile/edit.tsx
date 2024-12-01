import AuthenticatedLayout from "~/components/layouts/authenticated-layout";
import DeleteUserForm from "./partials/delete-user-form";
import UpdatePasswordForm from "./partials/update-password-form";
import UpdateProfileInformation from "./partials/update-profile-form";
import { Head } from "@inertiajs/react";

export default function Edit() {
  return (
    <AuthenticatedLayout>
      <Head title="Profile" />

      <div className="space-y-6">
        <UpdateProfileInformation />
        <UpdatePasswordForm />
        <DeleteUserForm />
      </div>
    </AuthenticatedLayout>
  );
}
