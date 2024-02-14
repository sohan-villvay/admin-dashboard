"use client"

import { ColumnDef } from "@tanstack/react-table"
import ClosableTag from "../components/synonyms/closable-tag"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Synonyms = {
  id: string
  synonyms: string[]
}

export const columns: ColumnDef<Synonyms>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "synonyms",
    header: "Synonyms",
    cell: ({ row }) => {
      const items:string[] = row.getValue("synonyms")

      return <div className="">
        <ClosableTag items={items}/>
        </div>
    },
  }

]
