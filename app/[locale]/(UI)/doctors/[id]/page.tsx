"use client";

import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";
import { Tab, Tabs } from "@heroui/tabs";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

const DoctorID = () => {
  const i18n = useTranslations("doctor-id");
  const availableTime = i18n.raw("card.availableTime");

  let tabs = [
    {
      id: "About",
      label: "معلومات حول الطبيب",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "Feedback",
      label: "الاراء",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <div className="flex flex-row items-start">
      <div className="flex flex-col gap-8 items-start flex-1">
        <div className="flex flex-row items-start gap-4">
          <Image src="/doctors/doctor-img01.png" width={200} height={200} />

          <div className="flex flex-col gap-2">
            <Chip color="primary" variant="flat">
              Surgeon
            </Chip>
            <h3 className="text-lg font-semibold">Dr.Alfaz Ahmed</h3>

            <div className="flex gap-1 items-center">
              <span className="text-sm text-default-700">4.5</span>
              <Icon
                className="text-warning"
                icon="basil:star-solid"
                width="20"
                height="20"
              />
            </div>

            <h4 className="font-light text-default-700">
              Specialization in Surgeon
            </h4>
          </div>
        </div>

        <Tabs
          aria-label="Dynamic tabs"
          items={tabs}
          color="primary"
          variant="underlined"
        >
          {(item) => (
            <Tab key={item.id} title={item.label}>
              <Card className="p-3">
                <CardBody>
                  <p className="font-light text-start">{item.content}</p>
                </CardBody>
              </Card>
            </Tab>
          )}
        </Tabs>
      </div>
      <div className="w-[400px]">
        <Card
          isHoverable
          className="p-3 max-w-[350px] shadow-primary/10 shadow-xl"
        >
          <CardHeader className="flex items-center justify-between">
            <p className="font-semibold text-lg">{i18n("card.ticket")}</p>
            <Chip color="primary" variant="flat">
              {i18n("card.price")}
            </Chip>
          </CardHeader>

          <CardBody className="flex flex-col gap-3">
            <h4 className="text-start">{i18n("card.timeTitle")}</h4>

            <div className="flex flex-col gap-2">
              {availableTime.map((item: any, index: number) => {
                return (
                  <div
                    className="flex flex-row items-center justify-between font-light"
                    key={index}
                  >
                    <p className="text-primary">{item.day}</p>
                    <p>{item.time}</p>
                  </div>
                );
              })}
            </div>
          </CardBody>

          <CardFooter>
            <Button
              fullWidth
              color="primary"
              variant="shadow"
              endContent={
                <Icon icon="hugeicons:appointment-02" width="20" height="20" />
              }
            >
              {i18n("card.button")}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default DoctorID;
