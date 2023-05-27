import { atom } from "jotai";
import { posts } from "./posts";
import { atomWithStorage } from "jotai/utils";

export const currentPageComponentAtom = atom(posts[0]);
export const darkModeAtom = atomWithStorage("darkMode", false);
