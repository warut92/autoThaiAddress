let RESULTS = []
let scearhed_adress = document.getElementById('adress')

function scearh(input_text) {
    scearhed_adress.style.display = "block"

    let word_input = input_text.value

//ที่อยู่
thailand_adress = thailand_adress.replace(/\t/gm,"，")
    const THAILAND_ADRESS = thailand_adress.split("\n")

    if (word_input.length > 1) {
      let PATTERN = new RegExp(`(${(word_input)})`, "gm");
      RESULTS = THAILAND_ADRESS.filter(function(str) {
        return PATTERN.test(str);
      });
      let results = RESULTS.toString()
      .replace(/,/gm,"</span><br><span onclick=\"addAdress(this)\">")
      scearhed_adress.innerHTML = "<span onclick=\"addAdress(this)\">" + results + "<br>"

    } else {
        scearhed_adress.innerHTML = "ไม่พบที่อยู่...<br>"
    }
  } 

  function addAdress(whole_adress) {
    const WHOLE_ADRESS = whole_adress.textContent.split("，")
    document.querySelector('input[name="tambol"]').value = WHOLE_ADRESS[0]
    document.querySelector('input[name="amphoe"]').value = WHOLE_ADRESS[1]
    document.querySelector('input[name="province"]').value = WHOLE_ADRESS[2]
    document.querySelector('input[name="postcode"]').value = WHOLE_ADRESS[3]
    console.log(whole_adress.textContent);
    scearhed_adress.style.display = "none"
  }