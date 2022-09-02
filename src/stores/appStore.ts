import create from 'zustand';

const useAppStore = create(set => ({
  aRandomState: undefined,

  updateRandomState: (somethingToUpdate: any) =>
    set((state: any) => ({ aRandomState: somethingToUpdate })),
}));

export { useAppStore };
