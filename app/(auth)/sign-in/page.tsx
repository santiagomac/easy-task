import { FormSignIn } from "@/components/FormSignIn";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="flex justify-evenly h-full">
      <div className="h-full flex justify-center items-center">
        <Image
          width={1250}
          height={1000}
          src="/login-preview.webp"
          alt="logo"
          className="preview-image rounded-md overflow-hidden border border-gray-200/50 shadow-lg"
        />
      </div>
      <div className="flex w-2/3 justify-center items-center">
        <FormSignIn />
      </div>
    </div>
  );
}
