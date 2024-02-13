import { HomeIcon, VercelLogoIcon} from '@radix-ui/react-icons'

interface ISidebarItem{
  name: string;
  icon: any;
  path: string;
}

const SidebarItem = ({item}:{item: ISidebarItem}) => {
  
  const { name, icon:Icon } = item;
  return (
    <div className='flex items-center space-x-2 p-3 hover:bg-slate-100 rounded-lg cursor-pointer'>
      <Icon/>
      <p>{name}</p>
      </div>
  )
}

export default SidebarItem;