"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon } from "@/components/icons";
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";
import LangSwitch from "./lang-switch";
import { Image } from "@heroui/image";
import { useUserStore } from "@/lib/zustand";

export const Navbar = () => {
  const { user } = useUserStore();
  const i18 = useTranslations("navbar");

  const buttons = i18.raw("buttons");
  const links = i18.raw("links");

  return (
    <HeroUINavbar maxWidth="2xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image src="/logo.svg" height={220} isBlurred />
            {/* <p className="font-bold text-primary text-xl">{i18("logo")}</p> */}
            {user ? "welcome user" : "no user"}
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {links.map((item: any) => (
            <NavbarItem key={item.path}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.path}
              >
                {item.title}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2 items-center">
          <ThemeSwitch />
          <LangSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex gap-2">
          {buttons.map((btn: any, index: number) => (
            <Button
              key={index}
              as={Link}
              href={btn.path}
              color="primary"
              variant={index === 1 ? "flat" : "solid"} // تغيير الـ variant للتاني بس
              endContent={
                index === 1 ? (
                  <Icon icon="lucide:shield-user" width="20" height="20" />
                ) : (
                  <Icon
                    icon="lucide:circle-user-round"
                    width="20"
                    height="20"
                  />
                )
              }
            >
              {btn.title}
            </Button>
          ))}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
