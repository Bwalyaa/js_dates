function whichDay(date) {
    let currentDate = new Date(date);
    let days = currentDate.getDay();

    if (days === 0 || days === 6) {
      return "Weekend";
    } else {
      return "Arbeitstag";
    }
  }
  
  console.log(whichDay("12.15.2019"));
  console.log(whichDay("2.16.2001"));
  console.log(whichDay("2.1.2020"));
  console.log(whichDay("2.29.2020"));