import { create } from "zustand";

interface ICounterStore {
  counter: number;
  increaseCount: () => void;
}

const useCounterStore = create<ICounterStore>()((set) => ({
  counter: 1,
  increaseCount: () => set((state) => ({ counter: state.counter + 1 })),
}));

export default useCounterStore;
