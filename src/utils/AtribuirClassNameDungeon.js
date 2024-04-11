const atribuirClassNameParaCelula = (cell) => {
  switch (cell) {
    case 0:
      return "cell-dungeon-value-0";
    case 10:
      return "cell-dungeon-value-10";
    case 100:
      return "cell-dungeon-value-100";
    case 99:
      return "cell-dungeon-value-99";
    default:
      return "";
  }
};

export default atribuirClassNameParaCelula;