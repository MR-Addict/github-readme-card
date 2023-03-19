export interface RawRepoInfoType {
  errors: { message: string }[];
  data: {
    repository: {
      name: string;
      description: string;
      stargazers: { totalCount: number };
      forks: { totalCount: number };
      primaryLanguage: { name: string };
    };
  };
}

export interface RawUserInfoType {
  errors: { message: string }[];
  data: {
    user: {
      name: string;
      bio: string;
      followers: { totalCount: number };
      following: { totalCount: number };
      repositories: { totalCount: number };
    };
  };
}
