"use client";

import { Button } from "@radix-ui/themes";
import { ColumnDef } from "@tanstack/react-table";
import AddNewTag from "../components/synonyms/add-new-tag";
import ClosableTag from "../components/synonyms/closable-tag";

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
