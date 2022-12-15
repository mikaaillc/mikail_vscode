import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

const GitLogo = require("../assets/logos/GitLogo.png");
const LinkedinLogo = require("../assets/logos/LinkedinLogo.png");
const MediumLogo = require("../assets/logos/medium.png");
const MailLogo = require("../assets/logos/MailLogo.png");

const JSIcon = require("../assets/icons/spring.png");
const ReactIcon = require("../assets/logos/ReactLogo.png");
const DjangoIcon = require("../assets/logos/django.png");
const Python = require("../assets/logos/PythonLogo.png");

const LeftBar = () => {
  const [showWebList, SetShowWebList] = useState(true);
  const [showProjectsList, SetShowProjectsList] = useState(true);

  const WebList = () => (
    <div>
      <a href="https://github.com/mikaaillc/surveyAppBackend">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={JSIcon}
            alt={"js"}
            className="w-6 mr-1  ml-5 text-yellow_vs"
          />
          <p>Survey App Backend</p>
        </div>
      </a>
      <a href="https://github.com/mikaaillc/survey-react">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={ReactIcon}
            alt={"react"}
            className="w-6 mr-1  ml-5 text-yellow_vs"
          />
          <p>Survey App Frontend</p>
        </div>
      </a>
      <a href="https://github.com/mikaaillc/shopOnline-">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
              src={JSIcon}
              alt={"js"}
              className="w-6 mr-1  ml-5 text-yellow_vs"
          />
          <p>Shop Wepsite Backend</p>
        </div>
      </a>
      <a href="https://github.com/mikaaillc/shop-online-react">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12 w-60">
          <img
            src={ReactIcon}
            alt={"js"}
            className="w-6 mr-1  ml-5 text-yellow_vs"
          />
          <p>Shop Wepsite Frontend</p>
        </div>
      </a>
      <a href="https://github.com/mikaaillc/DjangoHeroku">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={DjangoIcon}
            alt={"Django"}
            className="w-6 mr-1  ml-5 text-yellow_vs"
          />
          <p>To-Do Heroku</p>
        </div>
      </a>
      <a href="https://github.com/mikaaillc/booksApp">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
              src={DjangoIcon}
              alt={"Django"}
              className="w-6 mr-1  ml-5 text-yellow_vs"
          />
          <p>Book App</p>
        </div>
      </a>
    </div>
  );

  const Desktop = () => (
      <div>
        <a href="https://github.com/mikaaillc/PyqtChartsandPyqt5">
          <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
            <img
                src={Python}
                alt={"python"}
                className="w-6 mr-1  ml-5 text-yellow_vs"
            />
            <p>Python Charts</p>
          </div>
        </a>
        <a href="https://github.com/mikaaillc/main_avionics">
          <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
            <img
                src={Python}
                alt={"python"}
                className="w-6 mr-1  ml-5 text-yellow_vs"
            />
            <p> Main Avionic App </p>
          </div>
        </a>
      </div>
  );

  return (
    <div className="text-[#a2aabc] text-lg mt-5 flex bg-[#262526] h-full">
      <div>
        <div
          className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
          onClick={() => SetShowProjectsList(!showProjectsList)}
        >
          {showProjectsList ? (
            <ChevronDownIcon className="w-7 mr-1" />
          ) : (
            <ChevronRightIcon className="w-7 mr-1" />
          )}
          <p>Projects</p>
        </div>
        {showProjectsList ? (
          <>
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowWebList(!showWebList)}
            >
              {showWebList ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>Web</p>
            </div>
            {showWebList ? <WebList /> : null}
            <div
                className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
                onClick={() => SetShowWebList(!showWebList)}
            >
              {showWebList ? (
                  <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                  <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>Desktop</p>
            </div>

            {showWebList ? <Desktop /> : null}
          </>
        ) : null}
        <div className="absolute inset-x-0 bottom-10 ">
          <div className="flex px-6 space-x-7">
            <a href="https://github.com/mikaaillc">
              <img
                src={GitLogo}
                alt="Git Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a href="https://medium.com/@mikail.celik">
              <img
                src={MediumLogo}
                alt="Medium Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a href="https://www.linkedin.com/in/mikailcelik/">
              <img
                src={LinkedinLogo}
                alt="Linkedin Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a href="mailto::mikailclk23@gmail.com">
              <img
                src={MailLogo}
                alt="Mail Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
