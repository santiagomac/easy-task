import { FormSignUp } from "@/components/FormSignUp";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="flex justify-evenly h-full">
      <div className="h-full flex justify-center items-center overflow-hidden">
        <Image
          width={1250}
          height={1000}
          src="/home-preview.webp"
          alt="home"
          className="preview-image rounded-md overflow-hidden border border-gray-200/50 shadow-lg"
        />
      </div>
      <div className="flex w-2/3 justify-center items-center">
        <FormSignUp />
      </div>
    </div>
  );
}
