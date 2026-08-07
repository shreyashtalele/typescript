type PayementStatus = "pending" | "processing" | "completed" | "failed";

type ActivePaymentStatus = Exclude<PayementStatus, "completed" | "failed">;
