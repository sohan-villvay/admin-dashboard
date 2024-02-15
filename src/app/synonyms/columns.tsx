"use client"

import { ColumnDef } from "@tanstack/react-table"
import ClosableTag from "../components/synonyms/closable-tag"

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
