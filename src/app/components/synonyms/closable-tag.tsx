import React from 'react';

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
          <span className="inline-flex items-center px-3 py-1 bg-slate-50 rounded-full text-slate-500 font-medium mr-1 shadow-md">
            {item}
            <button
              type="button"
              className="ml-2 focus:outline-none"
              onClick={() => handleRemoveItem(item)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-slate-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default ClosableTag;
