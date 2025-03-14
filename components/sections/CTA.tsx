import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { useTranslations } from "next-intl";

const CTA = () => {
  const i18n = useTranslations("homePage.cta");
  const points = i18n.raw("points");

  return (
    <section className="w-full items-center justify-between flex flex-row ">
      <div className="flex flex-col items-start justify-center gap-10">
        <h1 className="text-4xl font-bold">{i18n("title")}</h1>
        <div className="flex flex-col gap-3">
          {points.map((point: string) => {
            return (
              <p key={point} className="text-xl font-semibold text-default-700">
                {point}
              </p>
            );
          })}
        </div>

        <Button size="lg" color="primary" variant="shadow">
          {i18n("button")}
        </Button>
      </div>

      <Image
        src="/doctors/doctor-img01.png"
        width={350}
        height={350}
        isBlurred
      />
    </section>
  );
};

export default CTA;
