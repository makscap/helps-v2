import React from "react";
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
import s from "./IconMenu.module.css";

function IconMenu({ showList }) {
  return (
    <ul className={s.menu_list}>
      <li className={s.menu_item}>
        <button
          className={s.menu_group}
          onClick={(e) => {
            showList("all");
          }}
        >
          <MdPeopleAlt className={s.menu_icon} />
          <p className={s.role}>Всі</p>
        </button>
      </li>

      <li className={s.menu_item}>
        <button className={s.menu_group} onClick={() => showList("water")}>
          <BiWater className={s.menu_icon} />
          <p className={s.role}>Сантехніка</p>
        </button>
      </li>
      <li className={s.menu_item}>
        <button className={s.menu_group} onClick={() => showList("electric")}>
          <MdElectricalServices className={s.menu_icon} />
          <p className={s.role}>Електрика</p>
        </button>
      </li>
      <li className={s.menu_item}>
        <button className={s.menu_group} onClick={() => showList("lift")}>
          <MdOutlineElevator className={s.menu_icon} />
          <p className={s.role}>Ліфт</p>
        </button>
      </li>
      <li className={s.menu_item}>
        <button className={s.menu_group} onClick={() => showList("clean")}>
          <MdCleaningServices className={s.menu_icon} />
          <p className={s.role}>Прибирання</p>
        </button>
      </li>
      <li className={s.menu_item}>
        <button className={s.menu_group} onClick={() => showList("sewerage")}>
          <GiWarpPipe className={s.menu_icon} />
          <p className={s.role}>Каналізація</p>
        </button>
      </li>
      <li className={s.menu_item}>
        <button className={s.menu_group} onClick={() => showList("roof")}>
          <MdRoofing className={s.menu_icon} />
          <p className={s.role}>Дах</p>
        </button>
      </li>
      <li className={s.menu_item}>
        <button className={s.menu_group} onClick={() => showList("repair")}>
          <MdOutlineHomeRepairService className={s.menu_icon} />
          <p className={s.role}>Ремонт</p>
        </button>
      </li>
      <li className={s.menu_item}>
        <button className={s.menu_group} onClick={() => showList("structure")}>
          <RiGovernmentLine className={s.menu_icon} />
          <p className={s.role}>Структури</p>
        </button>
      </li>
      <li className={s.menu_item}>
        <button className={s.menu_group} onClick={() => showList("cars")}>
          <FaCarSide className={s.menu_icon} />
          <p className={s.role}>Транспорт</p>
        </button>
      </li>
      <li className={s.menu_item}>
        <button className={s.menu_group} onClick={() => showList("derat")}>
          <GiSeatedMouse className={s.menu_icon} />
          <p className={s.role}>Дреатизація</p>
        </button>
      </li>
      <li className={s.menu_item}>
        <button className={s.menu_group} onClick={() => showList("chimney")}>
          <GiChimney className={s.menu_icon} />
          <p className={s.role}>Сажотруси</p>
        </button>
      </li>
    </ul>
  );
}

export default IconMenu;
