import "module-alias/register";
import "@/loadenv";

import exportRepoCards from "./exportRepoCards";
import exportProfileCards from "./exportProfileCards";

exportRepoCards();
exportProfileCards();
