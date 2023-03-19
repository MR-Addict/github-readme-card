import { formatNumber } from "../../lib";
import { githubToken } from "../../loadenv";
import type { RawUserInfoType } from "../../types";

export default async function fetchUser(user: string) {
  const query = `
    {
      user(login: "${user}") {
        name
        bio
        followers {
          totalCount
        }
        following {
          totalCount
        }
        repositories(isFork: false, privacy: PUBLIC) {
          totalCount
        }
      }
    }
  `;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: { Authorization: `Bearer ${githubToken}`, "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    if (!res.ok) throw new Error("Failed to fetch user info");
    const result: RawUserInfoType = await res.json();

    if (result.errors) throw new Error("Failed to fetch user info");
    const { name, bio, followers, following, repositories } = result.data.user;

    return {
      user: name,
      bio: bio,
      following: formatNumber(following.totalCount, 0),
      followers: formatNumber(followers.totalCount, 0),
      repositories: formatNumber(repositories.totalCount, 0),
    };
  } catch (error) {
    console.error(error);
    throw new Error("User infomation not found!");
  }
}
