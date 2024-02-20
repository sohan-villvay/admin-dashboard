import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Cross2Icon } from "@radix-ui/react-icons";
import React from "react";

interface Props {
  items: string[];
}

const ClosableTag: React.FC<Props> = ({ items }) => {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const handleRemoveItem = (item: string) => {
    setSelectedItems(
      selectedItems.filter((selectedItem) => selectedItem !== item),
    );
  };

  return (
    <div className="flex flex-wrap">
      {items.map((item, index) => (
        <div key={index} className="m-2">
          <span className="inline-flex items-center rounded-full border bg-gray-50 px-2 py-1 font-medium text-gray-500">
            {item}

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="group ml-1 h-5  w-5 rounded-full transition duration-200 ease-in-out hover:bg-red-100"
                >
                  <Cross2Icon className="h-3 w-3 group-hover:text-red-800" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will delete the synonym from the synoyms set.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </span>
        </div>
      ))}
    </div>
  );
};

export default ClosableTag;
