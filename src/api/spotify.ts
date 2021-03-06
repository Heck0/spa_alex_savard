import Category from "./../data/Category";

const getToken = async (): Promise<any> => {
  const spotifyClient: string | undefined =
    process.env.REACT_APP_SPOTIFY_CLIENT;
  const spotifySecret: string | undefined =
    process.env.REACT_APP_SPOTIFY_SECRET;

  const res: Response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(spotifyClient + ":" + spotifySecret)}`,
    },
    body: "grant_type=client_credentials",
  });

  const { access_token } = await res.json();
  return access_token;
};

const getRandomCategories = async (token: string): Promise<any> => {
  const offset = Math.floor(Math.random() * 30);
  const res = await fetch(
    `	https://api.spotify.com/v1/browse/categories?country=CA&offset=${offset}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const {
    categories: { items },
  } = await res.json();

  const parsedCategories: Category[] = items.map(
    ({ id, name, icons }: { id: string; name: string; icons: any }) => {
      const image: string = icons[0].url;

      return new Category(id, name, image);
    }
  );

  return parsedCategories;
};

export { getToken, getRandomCategories };
