"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Icon } from "@iconify/react";

const languages = {
  en: "English",
  ar: "عربي",
  ru: "Русский",
  fr: "Français",
};

const LangSwitch = () => {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1];

  const switchLocale = (locale: string) => {
    if (locale === currentLocale) return;
    const newPath = `/${locale}${pathname.substring(currentLocale.length + 1)}`;
    router.push(newPath);
  };

  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button isIconOnly variant="flat" color="primary">
          <Icon icon="lucide:earth" width="18" height="18" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Select Language" variant="faded">
        {Object.entries(languages).map(([locale, label]) => (
          <DropdownItem
            key={locale}
            onClick={() => switchLocale(locale)}
            startContent={
              <Icon icon="lucide:languages" width="20" height="20" />
            }
          >
            {label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default LangSwitch;
