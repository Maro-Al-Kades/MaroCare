"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { Image } from "@heroui/image";
import { useTranslations } from "next-intl";

const FAQ = () => {
  const i18n = useTranslations("homePage.faq");
  const dropdowns = i18n.raw("dropdowns");

  return (
    <section className="w-full items-center justify-between px-10 flex flex-row ">
      <div className="flex flex-col items-start justify-center gap-10 ">
        <h1 className="text-4xl font-bold">{i18n("title")}</h1>
        <Accordion variant="splitted">
          {dropdowns.map((dropdown: any, index: number) => {
            return (
              <AccordionItem
                key={index}
                aria-label={dropdown.title}
                title={dropdown.title}
              >
                {dropdown.description}
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>

      <Image
        src="/doctors/faq-img.png"
        className=""
        isBlurred
        height={500}
        width={400}
      />
    </section>
  );
};

export default FAQ;
