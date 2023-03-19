import axios from "axios";

import { formatNumber } from "../../lib";
import { githubToken } from "../../loadenv";
import type { RawRepoInfoType } from "../../types";
import { languageColors } from "./languageColors";

export default async function fetchRepo(user: string, repo: string) {
  const query = `
    {
      repository(owner: "${user}", name: "${repo}") {
        name
        description
        stargazers {
          totalCount
        }
        forks {
          totalCount
        }
        primaryLanguage {
          name
        }
      }
    }
  `;

  try {
    const url = "https://api.github.com/graphql";
    const headers = { Authorization: `Bearer ${githubToken}`, "Content-Type": "application/json" };
    const res = await axios.post(url, JSON.stringify({ query }), { headers });

    if (res.status !== 200) throw new Error("Failed to fetch user info");
    const result: RawRepoInfoType = await res.data;
    const { name, description, stargazers, forks, primaryLanguage } = result.data.repository;

    return {
      name: name,
      intro: description,
      stars: formatNumber(Number(stargazers.totalCount)),
      forks: formatNumber(Number(forks.totalCount)),
      lang: primaryLanguage.name,
      langColor: languageColors[primaryLanguage.name].color || "#0050b2",
    };
  } catch (error) {
    throw new Error("Failed to fetch repo info");
  }
}
