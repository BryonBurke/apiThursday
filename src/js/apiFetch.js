export class ApiFetch {
  constructor() {
  
  }



  getBC() {
    this.calls++;
    return fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=Toothache&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=65e78e35f3547881dfd6ad5415c92537`)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      return json.data[1].practices[0].name;
    });
  }
}
