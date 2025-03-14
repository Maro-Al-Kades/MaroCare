import { useTranslations } from "next-intl";
import SearchInput from "./_components/SearchInput";
import DoctorCard from "@/components/DoctorCard";
import { Pagination } from "@heroui/pagination";

const FindDoctorRoute = () => {
  const i18n = useTranslations("find-doctor");

  return (
    <div className="w-full flex flex-col items-center justify-center gap-20">
      <div className="flex w-full flex-col items-center justify-center gap-10">
        <h1 className="text-4xl font-bold">{i18n("title")}</h1>

        <SearchInput />
      </div>

      <div className="flex flex-row flex-wrap gap-6">
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </div>

      <Pagination loop showControls color="primary" initialPage={1} total={5} />
    </div>
  );
};

export default FindDoctorRoute;
