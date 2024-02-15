import { Synonyms, columns } from "./columns"
import { DataTable } from "../components/synonyms/data-table"
import { revalidatePath } from 'next/cache';
import { getData, postData } from "@/lib/actions";
import { toast } from "sonner"


export async function makePostRequest() {

    console.log("Add new")

    try {
        const data = {
            "synonyms": [
                "sdf",
                "sfgffgdg",
                "dfdf"
            ],
            "id": "Test2"
        };

        const response = await postData(data);
        console.log('Response:', response);
        toast("New synonym set added!")


    } catch (error) {
        console.error('Error:', error);
    }
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