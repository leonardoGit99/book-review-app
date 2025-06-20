import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './navigation-menu'

type NbProps = {
  onLogout: () => void;
}

function NbMobileItems({ onLogout }: NbProps) {
  return (
    <div>
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
    </div>
  )
}

export default NbMobileItems