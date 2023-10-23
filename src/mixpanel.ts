"use client";

import { useEffect } from "react";
import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = "09...ae"; // Replace with your token

// Initialize Mixpanel
mixpanel.init(MIXPANEL_TOKEN, {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
});

mixpanel.track_links("a", "click_link");
console.log("Init is run just once!");
function useMixpanel() {
  const track = (eventName: string, props: any) => {
    mixpanel.track(eventName, props);
  };

  return { track };
}

export default useMixpanel;
