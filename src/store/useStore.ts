import { create } from 'zustand';

// Define the Zustand store
interface Store {
  count: number;
  increase: () => void;
  decrease: () => void;
}

export const useStore = create<Store>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));
