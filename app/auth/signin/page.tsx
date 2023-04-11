"use client";

import Image from "next/image";

import { LeftContent } from "../components/left-content";

export default function SignIn() {
  return (
    <div className="min-h-screen w-screen bg-white grid grid-cols-12">
      <LeftContent />
      <aside className="col-span-12 md:col-span-7 flex-1 flex justify-center items-center">
        <div className="py-12 md:w-[80%] lg:w-[65%]">
          <Image
            src="/images/logo/oliver_logo.png"
            alt="Oliver Logo"
            width="0"
            height="0"
            sizes="100vw"
            className="w-[100px] h-auto"
          />

          <div className="space-y-6">
            <div>
              <h1 className="text-[42px] text-[#2D3437] mb-2">
                Ingresa a tu cuenta
              </h1>
              <p className="text-sm font-light text-gray-400">
                Bienvenido de vuelta, por favor ingresa a tu cuenta.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
