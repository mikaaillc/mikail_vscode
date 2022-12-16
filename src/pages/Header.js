import React from "react";
import Avatar from "../assets/logos/mikail.jpg";
import Index from "../index.css";
import {IdentificationIcon} from "@heroicons/react/solid";
import spring from "../assets/icons/spring.png";
import ReactLogo from "../assets/logos/ReactLogo.png";
import PostgreSql from "../assets/logos/postgresql.png";
import Java from "../assets/logos/java.png";
import Hibernate from "../assets/logos/hibernate.ico";
import PythonLogo from "../assets/logos/PythonLogo.png";
import Intelij from "../assets/logos/intelij.png";
import Git from "../assets/logos/git.png";
import SqlLogo from "../assets/logos/sql.png";
import JSLogo from "../assets/logos/JsLogo.png";
import DockerLogo from "../assets/logos/DockerLogo.png";
import DjangoIcon from "../assets/logos/django.png";


function Header() {
  return (
    <div id="Header" className="mx-12 lg:mx-60 pt-20 items-start justifyr-cente ">
      <div className="flex flex-col">
        <code className="text-lightblue_vs">Merhaba, Ben </code>
          <br/>
            <text>
                <view style={{flexDirection:'row', alignItems:'center'}}>
                    <code className="text-[#e6f1ff] text-7xl mt-5">
                        MİKAİL ÇELİK
                    </code>
                </view>
            </text>
            <br/>
          <div>
              <div className="table">
                  <IdentificationIcon className="h-5 w-5 mr-4 text-blue_vs" />{" "}
                  <code className="table-cell text-[#e6f1ff] text-4xl mt-5 whitespace-nowrap">
                      Hakkımda
                  </code>
                  <img src="../assets/logos/JsLogo.png" alt=""/>
                  <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
              </div>
              <br/>
              <div className="text-[#a2aabc] text-lg mt-5">
                  <div className="grid grid-cols-2 gap-2 text-xl mt-4">
                      <div className="flex flex-row  mb-3">
                          <div>
                              <code>
                                  Araştırma, geliştirme ve üretim kavramlarını önemsiyorum.
                                  Hayatımı bu doğrultuda şekillendirme çabasındayım.
                                  Yeni bilgi edinmekten, denemekten ve sorun çözmekten büyük mutluluk duyarım.
                                  Yazılımı sadece bir iş değil bir hobi olarak görmekteyim.
                                  Öz disiplin ve sorumluluk sahibi birisi olduğuma inanıyorum.
                                  Ürün süreçlerinde kural ve standartlarına özen gösteririm.
                              </code>
                          </div>
                      </div>
                      <div className="object-fill">
                          <img className={ Index.shadowed} alt={'image of developer'} src={Avatar}
                                style={{width:'35vh',borderRadius:'200px',marginLeft:'150px',float:'right' ,display:"flex"}}
                          />{" "}
                      </div>
                  </div>
              </div>

              <div className="text-[#a2aabc] text-lg mt-10">
                  <div className="grid grid-cols-3 gap-5 text-sm mt-3 text-brown_vs">
                      <div className="flex flex-row mb-3">
                          <img
                              src={spring}
                              alt="Spring"
                              className="h-6 w-6 ml-1 mr-2 text-lightblue_vs"
                          />
                          <code>Spring Boot/
                              Spring</code>
                      </div>
                      <div className="flex flex-row mb-3">
                          <img
                              src={PostgreSql}
                              alt="Typescript Logo"
                              className="h-6 w-6 ml-3 mr-4 text-yellow_vs"
                          />
                          <code>Postgre Sql
                          </code>
                      </div>
                      <div className="flex flex-row  mb-3">
                          <img
                              src={Java}
                              alt="Tailwind Logo"
                              className="h-6 w-6 ml-3 mr-2 text-yellow_vs"
                          />
                          <code>Java</code>
                      </div>
                      <div className="flex flex-row mb-3">
                          <img
                              src={Git}
                              alt="NodeJS Logo"
                              className="h-6 w-6 ml-1 mr-2 text-yellow_vs"
                          />
                          <code>Git/
                              BitBucket</code>
                      </div>


                      <div className="flex flex-row  mb-3">
                          <img
                              src={PythonLogo}
                              alt="Python Logo"
                              className="h-6 w-6 ml-3 mr-4 text-yellow_vs"
                          />
                          <code>Python</code>
                      </div>
                      <div className="flex flex-row  mb-3">
                          <img
                              src={DjangoIcon}
                              alt="Python Logo"
                              className="h-6 w-6 ml-3 mr-2 text-yellow_vs"
                          />
                          <code>Django</code>
                      </div>
                      <div className="flex flex-row mb-3">
                          <img
                              src={Hibernate}
                              alt="Redux Logo"
                              className="h-6 w-6 ml-1 mr-1 text-yellow_vs"
                          />
                          <code>Hibernate</code>
                      </div>
                      <div className="flex flex-row mb-3">
                          <img
                              src={SqlLogo}
                              alt="SQL Logo"
                              className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
                          />
                          <code>SQL</code>
                      </div>
                      <div className="flex flex-row mb-3">
                          <img
                              src={JSLogo}
                              alt="JSLogo"
                              className="h-5 w-5 ml-3 mr-2 text-yellow_vs"
                          />
                          <code>JavaScript
                              /ExtJS </code>
                      </div>
                      <div className="flex flex-row mb-3">
                          <img
                              src={ReactLogo}
                              alt="React Logo"
                              className="h-6 w-6 ml-1 mr-2 text-yellow_vs"
                          />
                          <code>React</code>
                      </div>
                      <div className="flex flex-row mb-3">
                          <img
                              src={DockerLogo}
                              alt="MongoDB Logo"
                              className="h-6 w-6 ml-3 mr-4 text-yellow_vs"
                          />
                          <code>Docker</code>
                      </div>
                      <div className="flex flex-row mb-3">
                          <img
                              src={Intelij}
                              alt="Firebase Logo"
                              className="h-6 w-6 ml-3 mr-2 text-yellow_vs"
                          />
                          <code>Intelij IDEA</code>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Header;
