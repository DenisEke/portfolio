import Link from "next/link";
import Image from "next/image";

export default function Socials() {
  return (
    <div className="flex gap-2 opacity-50">
      <Link href="https://github.com/DenisEke" target="_blank">
        <div className="aspect-square h-5 w-5 ">
          <Image
            src="/icons/git.png"
            alt={"Github"}
            width={100}
            height={100}
            className="invert-[90%] hover:invert"
            priority
          />
        </div>
      </Link>
      <Link href="https://www.instagram.com/denis.ekert/" target="_blank">
        <div className="aspect-square h-5 w-5 ">
          <Image
            src="/icons/instagram.png"
            alt={"Github"}
            width={100}
            height={100}
            className="invert-[90%] hover:invert"
            priority
          />
        </div>
      </Link>
      <Link
        href="https://www.linkedin.com/in/denis-ekert-98455b19a/"
        target="_blank"
      >
        <div className="aspect-square h-5 w-5 ">
          <Image
            src="/icons/linkedin.png"
            alt={"Github"}
            width={100}
            height={100}
            className="invert-[90%] hover:invert"
            priority
          />
        </div>
      </Link>
    </div>
  );
}
