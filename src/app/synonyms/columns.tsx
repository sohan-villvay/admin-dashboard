"use client";

import { ColumnDef } from "@tanstack/react-table";
import AddNewTag from "../components/table/add-new-tag";
import ClosableTag from "../components/table/closable-tag";

export type Synonyms = {
  id: string;
  synonyms: string[];
};

export const columns: ColumnDef<Synonyms>[] = [
  // {
  //   accessorKey: "id",
  //   header: "ID",
  // },
  {
    accessorKey: "synonyms",
    header: "Synonyms",
    cell: ({ row }) => {
      const items: string[] = row.getValue("synonyms");

      return (
        <div className="flex">
          <ClosableTag items={items} />

          <AddNewTag />
        </div>
      );
    },
  },
];
