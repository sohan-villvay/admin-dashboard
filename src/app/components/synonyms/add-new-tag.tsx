import { CheckIcon } from "@radix-ui/react-icons"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { IconButton } from "@radix-ui/themes";

export function AddNewTag() {
  return (

    <div className="flex flex-row m-2 group">
      <Input placeholder="+" className="rounded-full h-7 w-7 transition-all ease-in-out focus:w-36 duration-300
       p-2 focus:placeholder-transparent" />
      <Button className="h-7 w-7 rounded-full bg-green-500 ml-1 invisible">
        <div className="text-white">
          <CheckIcon />
        </div>
      </Button>
    </div>
  )
}

export default AddNewTag;
