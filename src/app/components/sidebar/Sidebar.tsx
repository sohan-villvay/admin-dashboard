import { HeartIcon, HomeIcon, VercelLogoIcon } from "@radix-ui/react-icons";
import SidebarItem from "./SidebarItem";

interface ISidebarItem {
  name: string;
  icon: any;
  path: string;
}

const items: ISidebarItem[] = [
  {
    name: "Home",
    icon: HomeIcon,
    path: "/",
  },
  {
    name: "Synonyms",
    icon: VercelLogoIcon,
    path: "/synonyms",
  },
  {
    name: "Curations",
    icon: HeartIcon,
    path: "/curations",
  },
];

const Sidebar = () => {
  return (
    <div className="fixed left-4 top-20 z-10 h-screen w-60 rounded-3xl bg-white p-6 shadow-lg">
      <div className="flex flex-col space-y-14">
        <div className="flex flex-col space-y-1">
          {items.map((item) => (
            <SidebarItem key={item.path} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
