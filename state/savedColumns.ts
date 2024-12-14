import { TColumnInfo } from "@/components/ColumnAddForm";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const savedColumnsAtom = atomWithStorage<Array<TColumnInfo>>('savedColumns', []);

export const addColumnAtom = atom(null, (get, set, column: TColumnInfo) => {
    set(savedColumnsAtom, [...get(savedColumnsAtom), column]);
});

export const deleteColumnAtom = atom(null, (get, set, query: string) => {
    set(savedColumnsAtom, get(savedColumnsAtom).filter((column: TColumnInfo) => column.query !== query));
});