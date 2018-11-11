const format = jsDate => {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const day = jsDate.getDate();
  const monthIndex = jsDate.getMonth();
  const year = jsDate.getFullYear();

  return day + " " + monthNames[monthIndex] + " " + year;
};

export default { format };
