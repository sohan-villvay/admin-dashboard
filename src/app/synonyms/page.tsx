import { Synonyms, columns } from "./columns"
import { DataTable } from "../components/synonyms/data-table"

async function getData(): Promise<Synonyms[]> {
  // Fetch data from your API here.
  return [
    {
        id: "Welcome",
        synonyms: ["Welcome", "Hi", "Hello", "Greeting", "Salute"]
    },
    {
        id: "Bolt",
        synonyms: ["Bolt", "Nut", "Screw"]
    },
    {
        id: "Hinge",
        synonyms: ["Hook", "joint", "axis", "juncture"]
    },
    // ...
  ]
}


export default async function Synonyms() {
    const data = await getData()

    return (
        <div>
            <h2 className="text-xl font-medium ">Synonyms</h2>
        <div>
            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={data} />
            </div>
        </div>
        </div>
    );
  }