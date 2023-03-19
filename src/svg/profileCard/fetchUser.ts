import { formatNumber } from "../../lib";
import { githubToken } from "../../loadenv";
import type { RawUserInfoType } from "../../types";

export default async function fetchUser(user: string) {
  try {
    const url = `https://api.github.com/users/${user}`;
    const res = await fetch(url, { headers: { Authorization: `Bearer ${githubToken}` } });
    if (!res.ok) throw new Error("User infomation not found!");

    const result: RawUserInfoType = await res.json();

    return {
      user: result.name,
      bio: result.bio,
      following: formatNumber(result.following, 0),
      followers: formatNumber(result.followers, 0),
      public_repos: formatNumber(result.public_repos, 0),
    };
  } catch (error) {
    throw new Error("User infomation not found!");
  }
}
