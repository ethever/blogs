import { atom } from "jotai";
import { posts } from "./posts";

export const currentPageComponentAtom = atom(posts[0]);
