import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/button";

const Features = () => {
  const i18n = useTranslations("homePage.features");
  const cards = i18n.raw("cards");

  return (
    <section className="w-full items-center justify-center flex flex-col gap-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">{i18n("title")}</h1>
        <p className=" font-light text-primary/80">{i18n("description")}</p>
      </div>

      <div className="flex flex-row items-center justify-center gap-8">
        {cards.map((card: any) => (
          <Card className="p-4" isHoverable key={card.title}>
            <CardHeader className="flex items-center justify-center">
              <Icon
                icon="hugeicons:hospital-02"
                className="text-primary"
                width="50"
                height="50"
              />
            </CardHeader>

            <CardBody className="flex flex-col gap-3 items-center justify-center">
              <h4 className="text-xl">{card.title}</h4>
              <p className="text-center text-default-700">{card.description}</p>
            </CardBody>

            <CardFooter>
              <Button fullWidth color="primary" variant="flat">
                {card.button}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
