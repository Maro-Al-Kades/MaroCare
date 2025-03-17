"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Radio, RadioGroup } from "@heroui/radio";
import { Select, SelectItem } from "@heroui/select";
import { register } from "@/actions/auth";
import { addToast } from "@heroui/toast";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function App() {
  const router = useRouter();
  const t = useTranslations("register-page");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    photo: "",
    gender: "male",
    bloodType: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    const result = await register(formDataToSend);

    if (result?.error) {
      setError(result.error);
      addToast({
        title: "Registration Failed",
        description: result.error,
        color: "danger",
        variant: "solid",
      });
    } else {
      addToast({
        title: "Registration Successful",
        description: "Your account has been created successfully!",
        color: "success",
        variant: "solid",
      });

      router.push("/");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-[80%] flex items-center justify-center p-4">
      <Card className="w-full max-w-lg" shadow="lg">
        <CardHeader className="flex flex-col gap-1 items-center">
          <Icon icon="lucide:stethoscope" className="text-primary h-8 w-8" />
          <h1 className="text-xl font-semibold">{t("title")}</h1>
          <p className="text-sm text-default-500">{t("description")}</p>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Input
              label={t("form.fullName.label")}
              placeholder={t("form.fullName.placeholder")}
              value={formData.name}
              onValueChange={(value) =>
                setFormData({ ...formData, name: value })
              }
              isRequired
              startContent={
                <Icon icon="lucide:user" className="text-default-600" />
              }
            />

            <Input
              label={t("form.email.label")}
              placeholder={t("form.email.placeholder")}
              value={formData.email}
              onValueChange={(value) =>
                setFormData({ ...formData, email: value })
              }
              isRequired
              startContent={
                <Icon icon="lucide:mail" className="text-default-600" />
              }
            />

            <Input
              label={t("form.password.label")}
              placeholder={t("form.password.placeholder")}
              type="password"
              value={formData.password}
              onValueChange={(value) =>
                setFormData({ ...formData, password: value })
              }
              isRequired
              startContent={
                <Icon icon="lucide:lock" className="text-default-600" />
              }
            />

            <Input
              label={t("form.phone.label")}
              placeholder={t("form.phone.placeholder")}
              value={formData.phone}
              onValueChange={(value) =>
                setFormData({ ...formData, phone: value })
              }
              isRequired
              startContent={
                <Icon icon="lucide:phone" className="text-default-600" />
              }
            />

            <RadioGroup
              className="text-start"
              label={t("form.gender.label")}
              orientation="horizontal"
              value={formData.gender}
              onValueChange={(value) =>
                setFormData({ ...formData, gender: value })
              }
            >
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </RadioGroup>

            <Select
              label={t("form.bloodType.label")}
              placeholder={t("form.bloodType.placeholder")}
              selectedKeys={formData.bloodType ? [formData.bloodType] : []}
              onChange={(e) =>
                setFormData({ ...formData, bloodType: e.target.value })
              }
            >
              {bloodTypes.map((type) => (
                // @ts-ignore
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </Select>

            <Button
              type="submit"
              color="primary"
              className="w-full mt-2"
              endContent={<Icon icon="lucide:user-plus" />}
              isLoading={loading}
            >
              {t("button")}
            </Button>
          </form>

          <p className="flex items-center justify-center text-sm text-default-700 gap-2 py-3 font-light">
            {t("account")}
            <span className="text-primary font-medium">{t("login")}</span>
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
