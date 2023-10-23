// contexts/FullscreenContext.tsx

import { AnimatePresence, motion } from "framer-motion";
import React, {
  createContext,
  useState,
  useContext,
  use,
  useCallback,
  useEffect,
} from "react";
import Image from "next/image";

interface FullscreenContextType {
  updateMedia: (media?: string, layoutId?: string) => void;
}

export const FullscreenContext = createContext<FullscreenContextType>({
  updateMedia: () => {},
});

export function FullscreenProvider(props: any) {
  const [media, setMedia] = useState<string | undefined>(undefined);
  const [layoutId, setLayoutId] = useState<string | undefined>(undefined);

  const updateMedia = (media?: string, layoutId?: string) => {
    setMedia(media);
    setLayoutId(layoutId);
  };

  useEffect(() => {
    if (!media) return;

    function preventScroll(e: Event) {
      e.preventDefault();
    }
    document.addEventListener("wheel", preventScroll, { passive: false });
    document.addEventListener("touchmove", preventScroll, { passive: false });
    return () => {
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
    };
  }, [media]);

  return (
    <FullscreenContext.Provider value={{ updateMedia }}>
      {props.children}
      <div
        className={
          "fixed top-0 left-0 z-30 w-full h-full text-white " +
          (media ? "bg-black bg-opacity-90 block" : "hidden")
        }
        onClick={() => {
          updateMedia();
        }}
      >
        <AnimatePresence>
          {media && (
            <div className="container mx-auto xl:px-32 lg:px-8 px-4 h-full flex justify-center flex-col items-center gap-4">
              <motion.div
                layoutId={layoutId}
                className="w-full overflow-hidden aspect-video relative flex justify-center items-center rounded shadow-lg"
              >
                {media.endsWith(".mp4") || media.endsWith(".mkv") ? (
                  <video
                    src={media}
                    autoPlay
                    loop
                    muted
                    className="h-full"
                  ></video>
                ) : (
                  <Image
                    src={media}
                    alt={"Fullscreen Image View"}
                    className="object-contain"
                    fill
                  ></Image>
                )}
              </motion.div>
              <motion.p
                initial={{ opacity: 0, translateY: 100 }}
                animate={{ translateY: 0, opacity: 1 }}
                exit={{ opacity: 0, translateY: 100 }}
                className="font-bold font-large text-white"
              >
                Click anywhere to exit
              </motion.p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </FullscreenContext.Provider>
  );
}
