type GtagEventParams = {
  send_to: string;
  event_callback?: () => void;
  value?: number;
  currency?: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function reportConversion() {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", "conversion", {
    send_to: "AW-11477154112/yPwXCNXMiPYbEMDy3eAq",
  });
}


export default reportConversion;