export interface RawRepoInfoType {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export interface RawUserInfoType {
  login: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
}
