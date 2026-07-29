type paginatedResponse<T> = {
  page: number;
  limit: number;
  total: number;
  data: T[];
};

type User = {
  id: string;
  name: string;
};

const paginatedUserResponse: paginatedResponse<User> = {
  page: 1,
  limit: 10,
  total: 100,
  data: [
    {
      id: "USER-01",
      name: "shreyash",
    },
    {
      id: "USER-02",
      name: "rahul",
    },
  ],
};
