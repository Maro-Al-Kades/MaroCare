import { useTranslations } from "next-intl";
import DoctorCard from "../DoctorCard";

const TopRated = () => {
  const i18n = useTranslations("homePage.bestDoctors");

  return (
    <section className="w-full items-center justify-center flex flex-col gap-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">{i18n("title")}</h1>
        <p className=" font-light text-primary/80">{i18n("description")}</p>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-start gap-6">
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </div>
    </section>
  );
};

export default TopRated;
