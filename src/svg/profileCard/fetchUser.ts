import axios from "axios";

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
    const url = "https://api.github.com/graphql";
    const headers = { Authorization: `Bearer ${githubToken}`, "Content-Type": "application/json" };
    const res = await axios.post(url, JSON.stringify({ query }), { headers });

    if (res.status !== 200) throw new Error("Failed to fetch user info");
    const result: RawUserInfoType = res.data;

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
    throw new Error("Failed to fetch user info");
  }
}
