import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckIcon } from "@radix-ui/react-icons";

export function AddNewTag() {
  return (
    <div className="group m-2 flex flex-row">
      <Input
        placeholder="+"
        className="group h-7 w-7 rounded-full p-2 transition-all duration-300
       ease-in-out focus:w-36 focus:placeholder-transparent"
      />

      <Button className="invisible ml-1 h-7 w-7 rounded-full bg-lime-600/50 p-2 group-focus-within:visible">
        <div className="text-white">
          <CheckIcon />
        </div>
      </Button>
    </div>
  );
}

export default AddNewTag;
