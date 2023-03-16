import type { RepoType } from "./type";
import { formatNumber } from "@/lib";
import { languageColors } from "./languageColors";

export default async function fetchRepo(user: string, repo: string) {
  try {
    const url = `https://api.github.com/repos/${user}/${repo}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Repo infomation not found!");

    const result: RepoType = await res.json();

    return {
      name: result.name,
      stars: formatNumber(Number(result.stargazers_count)),
      forks: formatNumber(Number(result.forks_count)),
      intro: result.description,
      lang: result.language,
      langColor: languageColors[result.language].color || "#0050b2",
    };
  } catch (error) {
    throw new Error("Repo infomation not found!");
  }
}
