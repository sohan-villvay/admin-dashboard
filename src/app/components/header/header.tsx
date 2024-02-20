import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// import { ModeToggle } from "../theme/mode-toggle";

const Header = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-10 h-16 p-3 pl-4 pr-4">
      <div className="flex h-14 items-center justify-between rounded-full bg-white shadow-sm ">
        <div className="ml-2 rounded-full bg-white">
          <img
            className="mx-10 h-auto w-20 place-self-center bg-none"
            src="/villvay-logo2.png"
            alt="Logo"
          />
        </div>

        <h4 className="text-l font-medium">Welcome, Sohan</h4>

        <Sheet>
          <SheetTrigger>
            <div className=" mr-2 mt-1">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="flex flex-col items-center justify-center">
                <div>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>
                </div>
                Sohan De Silva
              </SheetTitle>
              <SheetDescription>
                <Separator />
                <div className="my-10">
                  <div>Settings</div>
                  <div>Profile</div>
                  <div>Logout</div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
