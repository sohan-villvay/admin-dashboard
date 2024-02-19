import { Separator } from "@/components/ui/separator";
import { getData, postData } from "@/lib/actions";
import { revalidatePath } from "next/cache";
import { toast } from "sonner";
import { DataTable } from "../components/synonyms/data-table";
import { Synonyms, columns } from "./columns";

export async function makePostRequest() {
  console.log("Add new");

  try {
    const data = {
      synonyms: ["sdf", "sfgffgdg", "dfdf"],
      id: "Test2",
    };

    const response = await postData(data);
    console.log("Response:", response);
    toast("New synonym set added!");
  } catch (error) {
    console.error("Error:", error);
  }
}

// Make a reusable component for the Cards
export default async function Synonyms() {
  const data = await getData();
  return (
    <div className="flex flex-row  gap-4">
      <div className="container mx-auto basis-3/5 rounded-3xl bg-white p-4 py-5 shadow-lg">
        <h2 className="text-l text-center font-medium">Synonyms</h2>
        <Separator className="my-4" />
        <DataTable columns={columns} data={data} />
      </div>

      <div className="container mx-auto basis-2/5 rounded-3xl bg-white py-5 shadow-lg">
        <h2 className="text-l text-center font-medium">Unit of Measures</h2>
        <Separator className="my-4" />
      </div>
    </div>
  );
}
