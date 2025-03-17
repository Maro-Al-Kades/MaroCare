"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { login } from "@/actions/auth";
import { addToast } from "@heroui/toast";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function LoginPage() {
  const router = useRouter();
  const t = useTranslations("login-page");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await login(formData);

    if (result?.error) {
      setError(result.error);
      addToast({
        title: "Login Failed",
        description: result.error,
        color: "danger",
        variant: "flat",
      });
    } else {
      router.push("/");
      addToast({
        title: "Login Successful",
        description: "Welcome back!",
        color: "success",
        variant: "flat",
      });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-[80%] flex items-center justify-center p-4">
      <Card className="w-full max-w-md" shadow="lg">
        <CardHeader className="flex flex-col gap-1 items-center">
          <Icon icon="lucide:log-in" className="text-primary h-8 w-8" />
          <h1 className="text-xl font-semibold">{t("title")}</h1>
          <p className="text-sm text-default-500">{t("description")}</p>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}

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

            <Button
              type="submit"
              color="primary"
              className="w-full mt-2"
              endContent={<Icon icon="lucide:log-in" />}
              isLoading={loading}
            >
              {t("button")}
            </Button>
          </form>
        </CardBody>
        <CardFooter className="flex items-center justify-center gap-1">
          <p className="flex items-center justify-center gap-1 font-light text-default-700 text-sm">
            {t("account")}
            <span className="text-primary font-medium">{t("register")}</span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
