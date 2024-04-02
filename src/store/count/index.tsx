import { create } from "zustand";

type StoreCount = {
  count: number;
  increaseCount: () => void;
};

const useCount = create<StoreCount>()((set) => ({
  count: 1,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
}));

export default useCount;
