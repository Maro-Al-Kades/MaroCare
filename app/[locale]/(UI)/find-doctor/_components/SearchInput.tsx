"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import React from "react";

const SearchInput = () => {
  const i18n = useTranslations("find-doctor");

  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = () => {
    console.log("Searching for doctors:", searchQuery);
    //TODO Add search logic here
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="flex gap-2 w-full items-center justify-center">
      <Input
        label={i18n("title")}
        placeholder={i18n("search.placeholder")}
        value={searchQuery}
        onValueChange={setSearchQuery}
        onKeyPress={handleKeyPress}
        startContent={
          <Icon icon="lucide:search" className="text-primary/50 w-5 h-5" />
        }
        className="flex-1 max-w-4xl"
      />
      <Button
        color="primary"
        onPress={handleSearch}
        endContent={<Icon icon="lucide:search" className="w-4 h-4" />}
        className="h-12"
      >
        {i18n("search.button")}
      </Button>
    </div>
  );
};

export default SearchInput;
