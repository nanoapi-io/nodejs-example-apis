const wizards = [
  { id: 1, name: "Gandalf" },
  { id: 2, name: "Saruman" },
  { id: 3, name: "Radagast" },
];

export const findAll = async () => {
  return wizards;
}

export const findById = async (id) => {
  return wizards.find((wizard) => wizard.id === parseInt(id));
}

export const create = async (wizard) => {
  wizards.push(wizard);
  return wizard;
}