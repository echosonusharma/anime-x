import create from 'zustand';

const useStore = create(set => ({
    input: '',
    setInput: (input) => set((state) => ({ ...state, input }))
}));


export default useStore;