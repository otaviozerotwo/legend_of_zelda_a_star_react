const atribuirClassNameParaCelula = (cell) => {
  switch (cell) {
    case 0:
      return "cell-dungeon-value-0";
    case 1:
      return "cell-dungeon-value-pingente-1";
    case 10:
      return "cell-dungeon-value-10";
    case 99:
      return "cell-dungeon-value-99";
    default:
      return "";
  }
};

export default atribuirClassNameParaCelula;