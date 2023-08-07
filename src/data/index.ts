import { writable, type Writable } from "svelte/store";

export const DB: Writable<IDB> = writable({
  stories: [],
})

export interface IDB {
  stories: any[]
}

export const HN_TOP_STORIES_URL = `https://hacker-news.firebaseio.com/v0/topstories.json`;
export const createHNItemUrl = (id: number) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

export async function fetchData(): Promise<unknown> {
  let topStories = [];
  try {
    const res = await fetch(HN_TOP_STORIES_URL);
    const json = await res.json();
    const topStoryIds = json.slice(0, 3);
    for await (const id of topStoryIds) {
      const url = createHNItemUrl(id);
      const r = await fetch(url);
      const j = await r.json();
      topStories.push(j);
    }
  } catch (e) {
    console.error(e)
  }

  return topStories;
}

export async function fetchDataAndUpdateDB(DB: Writable<IDB>) {
  // fetch data
  const res = await fetchData() as any[];
  // add data to db
  if(res) {
    DB.update((s) => {
      return {
        ...s,
        stories: res,
      }
    })
  }
}
