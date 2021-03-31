import create from 'zustand';

const useStore = create(set => ({
    anime: [],
    searchResult: [],
    setAnime: (anime) => set((state) => ({ ...state, anime })),
    setSearchResult: (searchResult) => set((state) => ({ ...state, searchResult })),
}));


export default useStore;