"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  inpiutField: z.string().min(2, {
    message: "Please Enter ip or domain name",
  }),
});
type props = {
  setIpData: ({}) => void;
};
const InputForm = ({ setIpData }: props) => {
  const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;

  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inpiutField: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const ipAddress = values.inpiutField;
    try {
      const res = await fetch(
        `https://geo.ipify.org/api/v2/country?apiKey=${
          process.env.NEXT_PUBLIC_IPFY_API_KEY
        }&${
          checkIpAddress.test(ipAddress)
            ? `ipAddress=${ipAddress}`
            : checkDomain.test(ipAddress)
            ? `domain=${ipAddress}`
            : ""
        }`
      );
      const data = await res.json();
      setIpData(data);
    } catch (error) {
      console.log(error);
    }
    form.reset();
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="inpiutField"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-inherit">
                  Ip Location{" "}
                  <span className="text-orange-600 font-semibold">Finder</span>
                </FormLabel>
                <FormControl>
                  <div className="flex">
                    <Input
                      autoComplete="off"
                      className="rounded-e-none focus:border-orange-300 focus-visible:border-orange-300"
                      placeholder="Enter ip address or domain name"
                      {...field}
                    />
                    <Button className="w-36 rounded-s-none bg-orange-500 hover:bg-orange-400">
                      Search
                    </Button>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};
export default InputForm;
