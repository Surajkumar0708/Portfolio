"use client";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiInstagramFill } from "react-icons/ri";
import Strings from "../../strings.json";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { BsFillMicFill, BsFillMicMuteFill } from "react-icons/bs";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { ImCross } from "react-icons/im";

import "./header.css";
import { useRouter } from "next/navigation";
import { videoActions } from "../store/slices/videoSlice/videoSlice";
import { playVideoBySpeech } from "../helpers/voiceCmdHelper";
import { profileActions } from "../store/slices/profileSlice/profileSlice";

interface HeaderData {
  name: String;
  path: String | undefined;
}

/*
1: Skills,
2: Profile,
3: play area,
4: experience,
5: project
*/

const speech = ["playvideo", "closevideo"];

const headerNav = [
  Strings.profileText,
  Strings.experienceText,
  Strings.skillsText,
  Strings.projectText,
  Strings.playText,
];

const navPath: any = {
  0: "",
  1: "experience",
  2: "skills",
  3: "project",
  4: "playarea",
};

const Header = () => {
  const dispatch = useDispatch();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const router = useRouter();
  const findingTheNavLinkWithVoice = headerNav.find((item: string) =>
    transcript.toLowerCase().includes(item.toLowerCase())
  );
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [isHamburger, setIsHamburger] = React.useState(false);
  const websiteVal = useSelector((state: any) => state.custSlice.formValues);

  const getNavLinksName = websiteVal?.reOrderNavLinks?.split(/\n|,/);
  const getNames = getNavLinksName
    ?.map((name: string) => name.replace(/^\d+\s*:\s*/, "").trim())
    .filter((name: string) => name.length);

  React.useEffect(() => {
    if (findingTheNavLinkWithVoice) {
      const redirectingLink =
        findingTheNavLinkWithVoice === Strings.playText
          ? "playarea"
          : findingTheNavLinkWithVoice === Strings.profileText
          ? ""
          : findingTheNavLinkWithVoice;
      router.push(`/${redirectingLink.toLowerCase()}`);
    }
    return () => resetTranscript();
  }, [findingTheNavLinkWithVoice]);

  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 768);
    });

    return () => {
      window.addEventListener("resize", () => {
        setIsMobile(window.innerWidth < 768);
      });
      setIsMobile(false);
    };
  }, []);

  const getPath = (reorderName: string) => {
    const filtered = headerNav
      .filter(
        (name: string) =>
          name?.toLocaleLowerCase() === reorderName?.toLocaleLowerCase()
      )
      .map((name: string) => name.toLocaleLowerCase().split(" ").join(""))
      .join("");
    return filtered;
  };

  const getPathForNav = (websiteVal: any, index: number) => {
    const path = getPath(websiteVal?.reOrderNavLinks && getNames[index]);
    return path.toLocaleLowerCase() === Strings.profileText.toLocaleLowerCase()
      ? "/"
      : `/${path || navPath[index]}`;
  };

  const navLinks: HeaderData[] = [
    {
      name: (websiteVal?.reOrderNavLinks && getNames[0]) || Strings.profileText,
      path: `${getPathForNav(websiteVal, 0)}`,
    },
    {
      name:
        (websiteVal?.reOrderNavLinks && getNames[1]) || Strings.experienceText,
      path: `${getPathForNav(websiteVal, 1)}`,
    },
    {
      name: (websiteVal?.reOrderNavLinks && getNames[2]) || Strings.skillsText,
      path: `${getPathForNav(websiteVal, 2)}`,
    },
    {
      name: (websiteVal?.reOrderNavLinks && getNames[3]) || Strings.projectText,
      path: `${getPathForNav(websiteVal, 3)}`,
    },
    {
      name: (websiteVal?.reOrderNavLinks && getNames[4]) || Strings.playText,
      path: `${getPathForNav(websiteVal, 4)}`,
    },
  ];

  const micIcon = () =>
    listening ? (
      <BsFillMicFill onClick={SpeechRecognition.stopListening} />
    ) : (
      <BsFillMicMuteFill onClick={showVoicePopup} />
    );

  playVideoBySpeech(transcript, dispatch, resetTranscript);

  const showVoicePopup = () => {
    dispatch(profileActions.setVoicePopupVisible(true));
  };

  const mobileNavShow = isHamburger
    ? "right_container mobile_right_container"
    : "right_container mobile_right_container hidden";

  return (
    <header
      style={{
        backgroundColor: websiteVal.headerColor,
        color: websiteVal.headerTextColor,
      }}
      className="header_container"
    >
      <div className="left_container">
        <h2>
          {websiteVal.headerLogoName.toLocaleUpperCase() || Strings.logoText}
        </h2>
      </div>
      <nav className={mobileNavShow}>
        <ul className="nav_links">
          {navLinks?.map(({ name, path }: any, i: number) => (
            <li className={`${name}`} key={name}>
              <Link style={{ color: websiteVal.headerTextColor }} href={path}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="social_links">
          <li>
            <a href={websiteVal?.GitHub || Strings.github} target="_blank">
              <FaGithub />
            </a>
          </li>
          <li>
            <a>
              <RiInstagramFill />
            </a>
          </li>
          <li>
            <a href={websiteVal?.LinkedIn || Strings.linkdIn} target="_blank">
              <FaLinkedinIn />
            </a>
          </li>
          {!isMobile && (
            <li>
              <a>{micIcon()}</a>
            </li>
          )}
        </ul>
      </nav>
      <div className="hamburger_icon">
        {!isHamburger ? (
          <GiHamburgerMenu onClick={() => setIsHamburger(true)} />
        ) : (
          <ImCross onClick={() => setIsHamburger(false)} />
        )}
        {isMobile && <a>{micIcon()}</a>}
      </div>
    </header>
  );
};

export default Header;
