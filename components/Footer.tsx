import React, { useEffect, useRef, useState } from "react";
import {
  Circle,
  Circle2,
  Diamond,
  Grovey,
  Pillar,
  Pillar2,
  Rectangle,
  UpArrow,
  Wave,
  Zen,
} from "./Icon";
import { footerLogos } from "./FooterLogos";

export default function Footer() {
  const [logoIndex, setLogoIndex] = useState(getRandomLogoIndex);
  const [footerLogo, setFooterLogos] = useState<JSX.Element>();
  const footerRef = useRef<HTMLElement>(null);
  const bgColor = useRef("");

  function getRandomLogoIndex() {
    return Math.floor(Math.random() * 8);
  }

  useEffect(() => {
    if (footerRef.current) {
      setFooterLogos(footerLogos[logoIndex]);
      switch (logoIndex) {
        case 2:
        case 4:
        case 5:
        case 7:
          bgColor.current = "rgb(199, 185, 255)";
          break;
        case 3:
        case 6:
          bgColor.current = "rgb(242, 78, 30)";
          break;

        case 8:
        default:
          bgColor.current = "rgb(255, 199, 0)";
          break;
      }
      footerRef.current.style.backgroundColor = bgColor.current;
    }
  }, [logoIndex]);

  return (
    <footer ref={footerRef} className="shopify-section-footer">
      <div className="footer-container contained">
        <div className="snippet--variable-logo">{footerLogo}</div>
        <h3 className="text">
          OBJECTS <br />
          THAT INSPIRE
        </h3>
        <ul className="footer-secondary">
          <li>
            <a href="" className="secondary-link">
              Privacy {"&"} Terms
            </a>
          </li>
          <li>
            <a href="" className="secondary-link">
              Contact Us
            </a>
          </li>
        </ul>
        <ul className="footer-socials">
          <li>
            <a href="" className="social-link h3">
              FIGMA ↗
            </a>
          </li>
          <li>
            <a href="" className="social-link h3">
              TWITTER
            </a>
          </li>
          <li>
            <a href="" className="social-link h3">
              INSTAGRAM
            </a>
          </li>
          <li>
            <a href="" className="social-link h3">
              YOUTUBE
            </a>
          </li>
        </ul>
        <button className="scroll-up">
          <UpArrow />
        </button>
      </div>
      <div className="footer-ticker h3">
        <div className="tape">
          <span className="word">Figma&apos;s</span>
          <Wave />
          <span className="word">marvelously</span>
          <Circle />
          <span className="word">considered</span>
          <Circle2 />
          <span className="word">collection</span>
          <Pillar />
          <span className="word">of</span>
          <Diamond />
          <span className="word">objects</span>
          <Zen />
          <span className="word">for</span>
          <Pillar2 />
          <span className="word">our</span>
          <Rectangle />
          <span className="word">time</span>
          <Grovey />
          <span className="word">on</span>
          <Grovey />
        </div>
        <div className="tape">
          <span className="word">Figma&apos;s</span>
          <Wave />
          <span className="word">marvelously</span>
          <Circle />
          <span className="word">considered</span>
          <Circle2 />
          <span className="word">collection</span>
          <Pillar />
          <span className="word">of</span>
          <Diamond />
          <span className="word">objects</span>
          <Zen />
          <span className="word">for</span>
          <Pillar2 />
          <span className="word">our</span>
          <Rectangle />
          <span className="word">time</span>
          <Grovey />
          <span className="word">on</span>
          <Grovey />
        </div>
      </div>
    </footer>
  );
}
