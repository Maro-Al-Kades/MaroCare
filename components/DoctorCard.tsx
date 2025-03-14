import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";
import { Icon } from "@iconify/react";

const DoctorCard = () => {
  return (
    <Card isHoverable className="p-2">
      <CardHeader>
        <Image src="/doctors/doctor-img03.png" height={300} />
      </CardHeader>
      <CardBody className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">Dr.Alfaz Ahmed</h3>
        <p className="text-sm font-light">NewYork, 32ST beside resturant</p>
        <div className="flex flex-row items-center justify-between">
          <Chip color="primary" variant="flat">
            neurologist
          </Chip>

          <div className="flex gap-1 items-center">
            <span className="text-sm text-default-700">4.5</span>
            <Icon
              className="text-warning"
              icon="basil:star-solid"
              width="20"
              height="20"
            />
          </div>
        </div>
      </CardBody>

      <CardFooter>
        <Button fullWidth color="primary">
          More Information
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;
