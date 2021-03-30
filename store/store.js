import create from 'zustand';

const useStore = create(set => ({
    input: '',
    anime: [],
    setInput: (input) => set((state) => ({ ...state, input })),
    setAnime: (anime) => set((state) => ({ ...state, anime }))
}));


export default useStore;