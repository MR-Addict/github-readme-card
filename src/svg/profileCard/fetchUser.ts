import { formatNumber } from "@/lib";
import type { RawUserInfoType } from "@/types";

export default async function fetchUser(user: string) {
  try {
    const url = `https://api.github.com/users/${user}`;
    const res = await fetch(url, { headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } });
    if (!res.ok) throw new Error("User infomation not found!");

    const result: RawUserInfoType = await res.json();

    return {
      user: result.name,
      bio: result.bio,
      following: formatNumber(result.following),
      followers: formatNumber(result.followers),
      public_repos: formatNumber(result.public_repos),
    };
  } catch (error) {
    throw new Error("User infomation not found!");
  }
}
