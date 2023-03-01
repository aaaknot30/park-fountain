import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
  console.log('Fetching API...');
  const response = await fetch('https://api.discogs.com/database/search?q=Nirvana&key=NYyyHmoHXqYejncQFnaA&secret=RWWzBdFPsseyctCuMYzUttimvlHpBVqM'
    , {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "User-agent": "Park Fountain Music App /0.1 +http://adb.park-fountain.com" 
      }
    });
  const content = await response.json();
  return { content };
}) satisfies PageLoad;