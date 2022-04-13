import React, { useState } from "react";
import data from "../../data/contacts.json";
import { BiWater } from "react-icons/bi";
import {
  MdPeopleAlt,
  MdCleaningServices,
  MdRoofing,
  MdOutlineHomeRepairService,
  MdOutlineElevator,
  MdElectricalServices,
} from "react-icons/md";
import { RiGovernmentLine } from "react-icons/ri";
import { GiChimney, GiSeatedMouse, GiWarpPipe } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa";
import { BsCameraReels } from "react-icons/bs";
import { SiHandshake } from "react-icons/si";
import s from "./ContactsPage.module.css";
import IconMenu from "../IconMenu/IconMenu";
import Pagination from "../Pagination/Pagination";

function ContactsPage() {
  const [dataList, setDataList] = useState("");

  const [currentPage, setCurrentPage] = useState(1); // Pagination
  const [productsPerPage] = useState(10); // Pagination

  let lastProductIndex = currentPage * productsPerPage; // Pagination
  let firstProductIndex = lastProductIndex - productsPerPage; // Pagination
  let currentProduct = dataList.slice(firstProductIndex, lastProductIndex); // Pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber); // Pagination

  const showList = (el) => {
    let newArray = [];

    data.map((e) => {
      switch (el) {
        case "all":
          setDataList(data);
          break;

        case "water":
          if (e.role === "Сантехніка") {
            newArray.push(e);
          }
          setDataList(newArray);
          break;

        case "electric":
          if (e.role === "Електрика") {
            newArray.push(e);
          }
          setDataList(newArray);
          break;
        case "lift":
          if (e.role === "Ліфт") {
            newArray.push(e);
          }
          setDataList(newArray);
          break;
        case "clean":
          if (e.role === "Прибирання") {
            newArray.push(e);
          }
          setDataList(newArray);
          break;
        case "sewerage":
          if (e.role === "Каналізація") {
            newArray.push(e);
          }
          setDataList(newArray);
          break;
        case "roof":
          if (e.role === "Дах") {
            newArray.push(e);
          }
          setDataList(newArray);
          break;
        case "repair":
          if (e.role === "Ремонт") {
            newArray.push(e);
          }
          setDataList(newArray);
          break;
        case "structure":
          if (e.role === "Структури") {
            newArray.push(e);
          }
          setDataList(newArray);
          break;
        case "cars":
          if (e.role === "Транспорт") {
            newArray.push(e);
          }
          setDataList(newArray);
          break;
        case "derat":
          if (e.role === "Дератизація") {
            newArray.push(e);
          }
          setDataList(newArray);
          break;
        case "chimney":
          if (e.role === "Сажотруси") {
            newArray.push(e);
          }
          setDataList(newArray);
          break;
        case "video":
          if (e.role === "Відео") {
            newArray.push(e);
          }
          setDataList(newArray);
          break;
        case "service":
          if (e.role === "Послуги") {
            newArray.push(e);
          }
          setDataList(newArray);
          break;

        default:
          return;
        // (
        // <div className={s.alert}>
        //   <p className={s.alert_success}>
        //     Будь ласка, виберіть в меню те, що шукаєте!
        //   </p>
        // </div>
        // )
      }
      console.log(newArray);
    });
  };

  const chooseList = (e) => {
    switch (e.role) {
      case "Сантехніка":
        return <BiWater className={s.icon} />;
      case "Електрика":
        return <MdElectricalServices className={s.icon} />;

      case "Ліфт":
        return <MdOutlineElevator className={s.icon} />;

      case "Прибирання":
        return <MdCleaningServices className={s.icon} />;

      case "Каналізація":
        return <GiWarpPipe className={s.icon} />;

      case "Дах":
        return <MdRoofing className={s.icon} />;

      case "Ремонт":
        return <MdOutlineHomeRepairService className={s.icon} />;

      case "Структури":
        return <RiGovernmentLine className={s.icon} />;

      case "Транспорт":
        return <FaCarSide className={s.icon} />;

      case "Дератизація":
        return <GiSeatedMouse className={s.icon} />;

      case "Сажотруси":
        return <GiChimney className={s.icon} />;
      case "Відео":
        return <BsCameraReels className={s.icon} />;
      case "Послуги":
        return <SiHandshake className={s.icon} />;

      default:
    }
  };

  return (
    <div className={s.container}>
      <div className={s.general}>
        <IconMenu showList={showList} />

        {dataList ? (
          <ul className={s.list}>
            {currentProduct.map((e) => (
              <li className={s.item} key={e.id}>
                <div className={s.role_group}>
                  {chooseList(e)}

                  <p className={s.role}>{e.role}</p>
                </div>

                <div className={s.info_group}>
                  <p className={s.name}>{e.name}</p>
                  <a
                    href={"tel:" + e.contacts.split(" ").join("")}
                    className={s.phoneNumber}
                  >
                    {e.contacts.split(" ").join("")}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className={s.alert}>
            <p className={s.alert_info}>
              Будь ласка, виберіть в меню те, що шукаєте!
            </p>
          </div>
        )}
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={dataList.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default ContactsPage;
