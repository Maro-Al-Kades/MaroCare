import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

const Hero = () => {
  const i18n = useTranslations("homePage.hero");
  const analytics = i18n.raw("analytics");

  return (
    <section className="flex flex-row w-full items-start justify-between">
      <div className="flex flex-col gap-8">
        <h1 className="text-6xl leading-snug font-bold max-w-xl">
          {i18n("title")}
        </h1>

        <p className="max-w-xl text-default-800">{i18n("description")}</p>
        <Button
          color="primary"
          endContent={
            <Icon icon="hugeicons:appointment-02" width="22" height="22" />
          }
          size="lg"
        >
          {i18n("button")}
        </Button>

        <div className="flex w-full items-center justify-around">
          {analytics.map((item: any) => (
            <div
              key={item.number}
              className="flex w-full flex-col items-center"
            >
              <h3 className="text-3xl font-bold text-primary text-center">
                {item.number}
              </h3>
              <p className="text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex gap-4 relative">
          <Image src="/doctors/hero-img01.png" isBlurred />
          <div className="flex flex-col gap-2 mt-8">
            <Image src="/doctors/hero-img02.png" isBlurred />
            <Image src="/doctors/hero-img03.png" isBlurred />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
