"use client"
import * as React from "react"
import { cn } from "../../lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { logoutUser } from "@/services/user"
import { useRouter } from "next/navigation"

type NbProps = {
  onLogout: () => void;
}

function NbDesktopItems({ onLogout }: NbProps) {
    const router = useRouter();
    const handleLogout = () => {
      logoutUser();
      router.push('/login');
    }
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a
              className={navigationMenuTriggerStyle()}
              onClick={onLogout}
            >
              Log out
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}
export default NbDesktopItems;

// Used to create a list item for the navigation menu
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


