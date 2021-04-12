import create from 'zustand';

const useStore = create((set) => ({
  anime: [],
  searchResult: [],
  auth: [],
  setAuth: (auth) => set((state) => ({ ...state, auth })),
  setAnime: (anime) => set((state) => ({ ...state, anime })),
  setSearchResult: (searchResult) => set((state) => ({ ...state, searchResult })),
}));

export default useStore;
