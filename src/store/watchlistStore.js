import { create } from "zustand";
import { persist } from "zustand/middleware";

const useWatchlistStore = create(
  persist(
    (set, get) => ({
      watchlist: [],
      addToWatchlist: (item) => {
        const existing = get().watchlist.some((i) => i.id === item.id);
        if (!existing) {
          let type = item.media_type;

          if (!type) {
            if ("first_air_date" in item) type = "tv";
            else if ("release_date" in item) type = "movie";
            else type = "movie";
          }

          set({ watchlist: [...get().watchlist, { ...item, type }] });
        }
      },
      removeFromWatchlist: (id) => {
        set({
          watchlist: get().watchlist.filter((movie) => movie.id !== id),
        });
      },
      isInWatchlist: (id) => {
        return get().watchlist.some((movie) => movie.id === id);
      },
    }),
    {
      name: "watchlist-storage", // key in localStorage
    }
  )
);

export default useWatchlistStore;
