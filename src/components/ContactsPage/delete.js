const chooseList = (e) => {
  console.log(e.role);
  switch (e.role) {
    case "Водоканал":
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

    default:
  }
};
