"use client";

import { Unity, useUnityContext } from "react-unity-webgl";

export default function TerrainDemo() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "projects/worms-2/Web.loader.js",
    dataUrl: "projects/worms-2/Web.data",
    frameworkUrl: "projects/worms-2/Web.framework.js",
    codeUrl: "projects/worms-2/Web.wasm",
  });

  return (
    <div className="justify-center flex flex-col">
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity unityProvider={unityProvider} className="w-full aspect-video" />
      <div className="flex container mx-auto xl:px-32 lg:px-8 px-4 w-full py-4 gap-4 justify-center">
        <div className="grid grid-cols-2 gap-4 text-white">
          <p>
            <span className="border rounded px-2 py-1">SCROLL</span> to switch
            grenade type
          </p>
          <p>
            <span className="border rounded px-2 py-1">W</span> and{" "}
            <span className="border rounded px-2 py-1">S</span> to aim
          </p>
          <p>
            <span className="border rounded px-2 py-1">SPACE</span> to jump
          </p>
          <p>
            Hold <span className="border rounded px-2 py-1">Rightclick</span> to
            shoot
          </p>
        </div>
      </div>
    </div>
  );
}
