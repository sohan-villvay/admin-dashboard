import { Synonyms, columns } from "./columns"
import { DataTable } from "../components/synonyms/data-table"

async function getData(): Promise<Synonyms[]> {
  
  const response = await fetch('https://65cda6eec715428e8b3ebc7d.mockapi.io/api/v1/synonyms')
  const data = await response.json()
  console.log(data)
  return data

//   return [
//     {
//         id: "Welcome",
//         synonyms: ["Welcome", "Hi", "Hello", "Greeting", "Salute"]
//     },
//     {
//         id: "Bolt",
//         synonyms: ["Bolt", "Nut", "Screw"]
//     },
//     {
//         id: "Hinge",
//         synonyms: ["Hook", "joint", "axis", "juncture"]
//     },
//     // ...
//   ]
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