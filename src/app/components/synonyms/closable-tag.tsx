import React from 'react';
import {
    Cross2Icon
} from "@radix-ui/react-icons"
import { Button } from '@/components/ui/button';

interface Props {
  items: string[];
}

const ClosableTag: React.FC<Props> = ({ items }) => {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const handleRemoveItem = (item: string) => {
    setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
  };

  return (
    <div className="flex flex-wrap">
      {items.map((item, index) => (
        <div key={index} className="m-2">
          <span className="inline-flex items-center px-2 py-1 bg-slate-50 rounded-full text-slate-500 font-medium border">
            {item}
            <Button variant="ghost" size="icon" className="rounded-full h-5 w-5 ml-1 hover:bg-red-100">
                <Cross2Icon className="h-3 w-3 hover:text-red-800" />
            </Button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default ClosableTag;
