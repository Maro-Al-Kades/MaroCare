import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

const Services = () => {
  const i18n = useTranslations("homePage.services");
  const cards = i18n.raw("cards");

  return (
    <section className="w-full items-center justify-center flex flex-col gap-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">{i18n("title")}</h1>
        <p className=" font-light text-primary/80">{i18n("description")}</p>
      </div>

      <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
        {cards.map((card: any) => {
          return (
            <Card key={card.title} isHoverable className="p-4 max-w-[350px]">
              <CardHeader>
                <h2 className="text-3xl font-bold text-primary">
                  {card.title}
                </h2>
              </CardHeader>

              <CardBody>
                <p className="text-start">{card.description}</p>
              </CardBody>

              <CardFooter>
                <Button
                  fullWidth
                  color="primary"
                  variant="bordered"
                  endContent={
                    <Icon
                      icon="hugeicons:cursor-info-01"
                      width="20"
                      height="20"
                    />
                  }
                >
                  {card.button}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
