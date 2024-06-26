const atribuirClassNameParaCelula = (cell) => {
  switch (cell) {
    case 0:
      return "cell-hyrule-value-0";
    case 1:
      return "cell-hyrule-link-house";
    case 2:
      return "cell-hyrule-entrada-lost-woods";
    case 3:
      return "cell-hyrule-master-sword";
    case 10:
      return "cell-hyrule-value-10";
    case 20:
      return "cell-hyrule-value-20";
    case 100:
      return "cell-hyrule-value-100";
    case 150:
      return "cell-hyrule-value-150";
    case 180:
      return "cell-hyrule-value-180";
    default:
      return "";
  }
};

export default atribuirClassNameParaCelula;