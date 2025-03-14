import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { useTranslations } from "next-intl";

const About = () => {
  const i18n = useTranslations("homePage.about");

  return (
    <section className="w-full items-start justify-between flex flex-row gap-8 bg-primary/50 rounded-xl shadow-2xl shadow-primary/30 p-16">
      <div className="flex flex-col items-start justify-center gap-8">
        <h1 className="text-4xl font-bold  max-w-2xl">{i18n("title")}</h1>
        <p className=" font-light text-lg  max-w-3xl leading-relaxed">
          {i18n("description")}
        </p>

        <Button size="lg" color="primary" variant="shadow">
          {i18n("button")}
        </Button>
      </div>

      <div>
        <Image
          src="/doctors/doctor-img03.png"
          height={350}
          width={350}
          isBlurred
        />
      </div>
    </section>
  );
};

export default About;
