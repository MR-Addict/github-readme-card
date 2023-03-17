export interface RawRepoInfoType {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export interface RepoConfigType {
  user: string;
  repo: string;
}
