import { useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export function useLocomotive(options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const loco = new LocomotiveScroll({
      el:            containerRef.current,
      smooth:        options.smooth ?? true,
      multiplier:    options.multiplier,
      inertia:       options.inertia,
      smartphone:    { smooth: options.smartphoneSmooth ?? true },
      tablet:        { smooth: options.tabletSmooth ?? true },
    });

    return () => loco.destroy();
  }, [
    options.smooth,
    options.multiplier,
    options.inertia,
    options.smartphoneSmooth,
    options.tabletSmooth,
  ]);

  return containerRef;
}
