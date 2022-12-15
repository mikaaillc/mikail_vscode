import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="mx-12 lg:mx-60 pt-16 items-center justify-center "
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-blue_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">SAKARYA ÜNİVERSİTESİ - LİSANS</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Elektrik Elektronik Mühendisliği
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • 2017-2021
            </code>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">ANADOLU ÜNİVERSİTESİ - ÖNLİSANS</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              WEB TASARIM VE KODLAMA
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • 2017
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Forte Bilgi İletişim Teknolojileri ve Savunma Sanayi-Havelsan</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              YAZILIM MÜHENDİSİ
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Temmuz 2022-Halen{" "}</code>
            <br />
            <code className="text-sm">
              <br />• Havelsan Ve Milli Savunma Bakanlığı bünyesinde geliştirilmekte olan Milli Modernizasyon projesi üzerinde çalışıldı.
              <br />• Bu kapsamda Askeralma, Seferberlik İnşaat/Emlak modülleri üzerinde Java Spring Boot, Hibernate, JSF (PrimeFaces), PostgreSql, Microservisce, Docker teknolojileri üzerine çalışılarak geliştirmeler yapıldı.
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">AKGÜN TEKNOLOJİ</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              FULL STACK YAZILIM MÜHENDİSİ
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Ekim 2021-Haziran 2022{" "}</code>
            <br />
            <code className="text-sm">
              <br />• Hastane Bilgi Yönetim Sistemi (HIS) projesi ve Eczane, Finans, Sterilizasyon ve Diyet-Rasyon modüllerinde Yazılım Geliştirme Mühendisi olarak görev yapılıdı.
              <br />• JasperReports ile kurumsal belgelendirme raporlama görevlerinde çalışıldı.
              <br />• Kullanılan teknolojiler Java, Hibernate, Spring MVC, JavaScript, ExtJS, Oracle Database, PostgreSQL Database
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">AYONVİ(Start-Up)</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              FULL STACK YAZILIM GELİŞTİRİCİ
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Mayıs 2020-Haziran 2022{" "}</code>
            <br />
            <code className="text-sm">
              <br />• Akıllı markete arabası projesi için Python kullanılarak kullanıcı arayüz geliştirimesi yapıldı.
              <br />• JAMSAM şirketinin desteği ile danışmanlık firmaları için kullanılacak websitesi gelitşirmesinde çalışıldı.
              Django ve React teknolojileri kullanıldı.
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">INOVAR VE ARGE MÜHENDİSLİK</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              STAJYER MÜHENDİS
            </code>
            <br />
            <code className="text-xs text-brown_vs">• HAZİRAN 2020- 1 Ay {" "}</code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">SEHA MÜHENDİSLİK </code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              STAJYER MÜHENDİS
            </code>
            <br />
            <code className="text-xs text-brown_vs">• TEMMUZ 2019- 1 Ay{" "}</code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Projects</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• TO DO APP (DJANGO) : Django web framework kullanılarak to do uygulaması geliştirilip Heroku ile deploy edildi.
              <br />• SPRING BOOT / REACT: CRUD işlemlerinin yapıldığı Spring Boot projesi ile katmanlı mimari ve nesne yönelimli programlama üzerine çalışıldı. Stok takip web sitesi geliştirildi. Frotend yazılımı için React kullanıldı.
              <br />• TEKNOFEST TÜRKSAT 4. MODEL UYDU YARIŞMASI 2019 SAVUNMA TEKNOLOJİLERİ FOCOUNT TAKIMI: Python dilini kullanılarak telemetri verileri görselleştirme ve kaydetme görevi üzerinde çalışıldı.
              <br />• TEKNOFEST TÜRKSAT 5. MODEL UYDU YARIŞMASI 2020 SAVUNMA TEKNOLOJİLERİ FOCOUNT TAKIMI: Yer istasyonu arayüz yazılımı görevi Python dilinde PyQT5 kütüphanesi kullanılarak sağlandı.
              <br />• TEKNOFEST ROKETSAN ROKET YARIŞMASI 2020 SAVUNMA TEKNOLOJİLERİ FOCOUNT TAKIMI
              <br />• TURKCELL SINIRSIZ YETENEK PROGRAMI 2021 (BORSACELL APP) Sınırsız yetenek programı kapsamında Turkcell'de çalışan yetkili kişilerle belirli online eğitimler verildi. Takımlara mentör atandı ve bu kapsamda bir proje fikri bulunup sunumu yapıldı.
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Certificates</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• SAKARYA ÜNİVERSİTESİ 21GÜN 37 DERECE YÖNETİM BİLİŞİM SİSTEMLERİ TOPLULUĞU
              <br />• JAVA İLE PROGRAMLAMAYA GİRİŞ BTK AKADEMİ
              <br />• JAVA-REACT YAZILIM GELİŞTİRİCİ KAMPI
              <br /> •PYTHON HACKERRANK
              <br />• PYTHON AND TENSORFLOW VERİ BİLİMİ BTK AKADEMİ
              <br />• UDEMY UYGULAMA GELİŞTİREREK C# EĞİTİMİ
              <br />• VERSİYON KONTROLLERİ: GİT VE GİTHUB BTK AKADEMİ
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
