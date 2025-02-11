import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-center h-[100px]">
      <div className="w-[940px] flex items-center justify-between">
          <Image
            className="dark:invert"
            src="next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <div className="flex w-[340px] place-items-center justify-end gap-8 font-extrabold">
            <div>Works</div>
            <div>Contact</div>
            <div>
              <Button>Connect</Button>
            </div>
          </div>
      </div>
    </nav>
  )
}