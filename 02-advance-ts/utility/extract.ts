type Permission = "Read" | "Write" | "Delete" | "Update";

type BasicPermission = Extract<Permission, "Read" | "Write">;
