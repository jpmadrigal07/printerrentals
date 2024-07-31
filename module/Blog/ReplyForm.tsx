import { Button } from "@/common/components/ui/Button";
import { Typography } from "@/common/components/ui/Typography";
import { sendEmail } from "@/common/helpers/sendEmail";
import { Link, Mail, Pencil, UserRound } from "lucide-react";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type T_Reply = {
  comment: string;
  name: string;
  email: string;
  website?: string;
};

const ReplyForm = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [captcha, setCaptcha] = useState<string | null>("");

  const { register, handleSubmit } = useForm<T_Reply>();

  const onSubmit = (data: T_Reply) => {
    if (captcha) {
      initiateEmailSend(data);
    } else {
      toast.error("Please complete the reCAPTCHA before proceeding.");
    }
  };

  const initiateEmailSend = (data: T_Reply) => {
    fetch("/api/verify-captcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: captcha }), // token will come from react-google-recaptcha implementation
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.error);
          });
        }
        return response.json();
      })
      .then(() => {
        // When the captcha is verified, send the email
        sendEmail({
          name: data.name,
          email: data.email,
          subject: "Reply from a blog",
          comment: data.comment,
          website: data.website,
        });
        toast.success("Email sent successfully!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <Typography className="text-[22px] md:text-2xl mb-6">
        Leave a Reply
      </Typography>
      <Typography variant="h2" className="mb-6">
        Your email address will not be published. Required fields are marked *
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 mt-2.5 pl-3">
            <Pencil aria-hidden="true" className="h-7 w-7 text-gray-400" />
          </div>
          <textarea
            {...register("comment", { required: true })}
            placeholder="Comment *"
            rows={5}
            className="block w-full rounded-md border-0 py-3 pl-[54px] pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-none focus:outline-none focus:ring-yellow-500 sm:text-xl sm:leading-6"
            required
          />
        </div>
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <UserRound aria-hidden="true" className="h-7 w-7 text-gray-400" />
          </div>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Name *"
            className="block w-full rounded-md border-0 py-3 pl-[54px] pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 focus:border-none focus:outline-none sm:text-xl sm:leading-6"
            required
          />
        </div>
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Mail aria-hidden="true" className="h-7 w-7 text-gray-400" />
          </div>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email *"
            className="block w-full rounded-md border-0 py-3 pl-[54px] pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 focus:border-none focus:outline-none sm:text-xl sm:leading-6"
            required
          />
        </div>
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Link aria-hidden="true" className="h-7 w-7 text-gray-400" />
          </div>
          <input
            {...register("website")}
            type="text"
            placeholder="Website"
            className="block w-full rounded-md border-0 py-3 pl-[54px] pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 focus:border-none focus:outline-none sm:text-xl sm:leading-6"
          />
        </div>
        <Button
          size="lg"
          className="group relative h-12 w-full md:w-48 overflow-hidden rounded-lg bg-secondary-800 shadow md:mt-24"
        >
          <div className="absolute inset-0 bg-secondary-900 transition-all duration-[250ms] ease-out opacity-0 group-hover:opacity-100"></div>
          <span className="relative text-white text-md">Post Comment</span>
        </Button>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.RECAPTCHA_PUBLIC || ""}
          onChange={setCaptcha}
        />
      </form>
    </div>
  );
};

export default ReplyForm;
