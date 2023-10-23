import Link from "next/link";
import CopyEmail from "../CopyEmail";
import Socials from "../Socials";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className=" py-16 bg-neutral-900 ">
      <div className="w-full  text-white ">
        <div className="container mx-auto xl:px-32 lg:px-8 px-4 py-8">
          <h3 className="text-xl font-bold opacity-75 pb-8">CONTACT</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 ">
            <div className="flex justify-center flex-1 min-h-[33vh]">
              <div className="aspect-[2421/3199] relative overflow-hidden rounded h-full w-full mx-4 md:w-fit">
                <Image
                  src="/me.jpg"
                  alt="Denis Ekert"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-8 px-4 text-lg ">
              <h4 className="text-xl font-bold opacity-75">
                Lets get in touch.
              </h4>
              <p className="">
                Whether you have a project in mind, questions about my
                experiences, or just want to say hello, I'd love to hear from
                you. Feel free to drop me a message, and I'll get back to you as
                soon as I can!
              </p>

              <CopyEmail alignLeft />
              <div className="flex justify-start w-full">
                <Socials />
              </div>
              <div className="flex flex-col gap-1 pt-16 md:pt-8">
                <p className="font-bold pb-3">Links</p>

                <Link
                  href="/CV_Denis_Ekert.pdf"
                  className="hover:underline underline-offset-2"
                  target="_blank"
                >
                  Download my CV ➜
                </Link>
                <Link
                  href="/images"
                  className="hover:underline underline-offset-2"
                  target="_blank"
                >
                  This site's code on GitHub ➜
                </Link>

                <Link
                  href="/impressum"
                  className="hover:underline underline-offset-2 opacity-50 pt-2"
                >
                  Impressum
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
