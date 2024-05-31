import InputLayout from "@/components/InputLayout";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex items-center justify-center p-10 flex-col">
      <h1 className="text-[40px]">MangaFam</h1>
      <InputLayout />
    </section>
  );
}
