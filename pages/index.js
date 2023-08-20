import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

//modlues
import { Section } from "deep-ui-design";
import Aos from "aos";
import "aos/dist/aos.css";

//components
import SEO from "public/SEO";
import Header from "@/components/common/Header";
import Sec1 from "@/components/home/sec1";
import Sec2 from "@/components/home/sec2";
import Sec3 from "@/components/home/sec3";
import Sec4 from "@/components/home/sec4";
import Sec5 from "@/components/home/sec5";
import { Drawer } from "@/components/common/Drawer";

//
export default function Index() {
  const router = useRouter();
  const errorPage = router.pathname === "/404";

  const [menuActive, setMenuActive] = useState(null);
  const contentRefs = useRef([]);

  const handleFocus = (i) => {
    contentRefs.current[i].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMenuActive(i);
  };

  // 위치 감지함수
  const handleScroll = () => {
    const contentPositions = contentRefs.current.map(
      (ref) => ref.offsetTop - 200
    );

    const currentPosition = window.pageYOffset;

    const activeIndex = contentPositions.findIndex(
      (position, index) =>
        currentPosition >= position &&
        currentPosition < (contentPositions[index + 1] || Infinity)
    );

    setMenuActive(activeIndex >= 0 ? activeIndex : null);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    Aos.init({ duration: 900, easing: "ease-in-out" });
  }, []);

  return (
    <>
      <SEO />
      {!errorPage && (
        <Header menuActive={menuActive} handleFocus={(i) => handleFocus(i)} />
      )}
      <Section>
        <Sec1 handleFocus={() => handleFocus(3)} />
        <Sec2 contectRef={(el) => (contentRefs.current[0] = el)} />
        <Sec3 contectRef={(el) => (contentRefs.current[1] = el)} />
        <Sec4 contectRef={(el) => (contentRefs.current[2] = el)} />
        <Sec5 contectRef={(el) => (contentRefs.current[3] = el)} />

        <Drawer handleFocus={(i) => handleFocus(i)} />
      </Section>
    </>
  );
}
