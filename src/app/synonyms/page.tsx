"use client";

import { Separator } from "@/components/ui/separator";
import { getData, postData } from "@/lib/actions";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import useGetSynonyms from "../_hooks/synonyms/use-get-synonyms";
import Card from "../components/card/card";
import { DataTable } from "../components/table/data-table";
import { Synonyms, columns } from "./columns";

// export async function makePostRequest() {
//   console.log("Add new");

//   try {
//     const data = {
//       synonyms: ["syn1", "syn2", "syn3"],
//       id: "TestSet",
//     };

//     const response = await postData(data);
//     console.log("Response:", response);
//     toast("New synonym set added!");
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// Make a reusable component for the Cards
export default function Synonyms() {
  const synonymQuery = useGetSynonyms();

  console.log(synonymQuery);

  if (synonymQuery.isLoading) {
    return <div>Is loading</div>;
  }

  return (
    <div className="flex flex-row  gap-4">
      <Card header="Synonyms" className="basis-4/6">
        <Separator className="my-4" />
        <DataTable columns={columns} Querydata={synonymQuery.data ?? []} />
      </Card>

      <Card header="Unit of Measures" className="basis-2/6">
        <Separator className="my-4" />
      </Card>
    </div>
  );
}
