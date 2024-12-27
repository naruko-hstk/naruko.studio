import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

const navigation = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Our Members",
    children: [
      {
        label: "星月なるこ",
        href: "/members/hoshitsuki-naruko",
      },
    ],
  },
  {
    label: "Contact with Us",
    href: "/contact",
  },
]

export default function DesktopNav() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          {navigation.map((item, index) => (
            <NavigationMenuItem key={index}>
              {item.children ? (
                <>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {item.children.map((child, index) => (
                      <div key={index} className="w-full">
                        <Link href={child.href} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            {child.label}
                          </NavigationMenuLink>
                        </Link>
                      </div>
                    ))}
                  </NavigationMenuContent>
                </>
              ) : (
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}
