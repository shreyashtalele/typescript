type isTypeId<T> = T extends number ? number : string;

type userId = isTypeId<number>;

type productId = isTypeId<boolean>;
