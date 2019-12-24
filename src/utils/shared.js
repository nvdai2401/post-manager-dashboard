export function formatDate(date) {
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();

  return day + "/" + month + "/" + year;
}

export function generateID(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
