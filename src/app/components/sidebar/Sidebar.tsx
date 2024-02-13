import { HomeIcon, VercelLogoIcon, HeartIcon} from '@radix-ui/react-icons'
import SidebarItem from './SidebarItem'

interface ISidebarItem{
  name: string;
  icon: any;
  path: string;
}

const items: ISidebarItem[] = [
  {
    name: "Home",
    icon: HomeIcon,
    path: "/"
  },
  {
    name: "Synonyms",
    icon: VercelLogoIcon ,
    path: "/synonyms"
  },
  {
    name: "Curations",
    icon: HeartIcon ,
    path: "/curations"
  }
];

const Sidebar = () => {
  return (

    <div className="fixed top-0 left-0 z-10 w-60 h-screen p-4 bg-white">
      <div className="flex flex-col space-y-10">
        <img className="h-5" src="/next.svg" alt="Logo"/>

        <div className='flex flex-col space-y-1'>
        {items.map((item) => (
          <SidebarItem key={item.path} item={item}/>
          ))}

        </div>
      </div>
    </div>

  )
}

export default Sidebar;