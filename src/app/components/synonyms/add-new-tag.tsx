import { PlusIcon } from "@radix-ui/react-icons"
 
import { Button } from "@/components/ui/button"
 
export function AddNewTag() {
  return (

    <div className="m-2">
        <Button variant="outline" size="icon" className="rounded-full h-7 w-7 border-dashed">
        <PlusIcon className="h-3 w-3" />
        </Button>
    </div>
  )
}

export default AddNewTag;
