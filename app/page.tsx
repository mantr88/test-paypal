import Image from "next/image";
import Payment from "./components/Payment";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Payment />
    </main>
  );
}
