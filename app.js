let RESULTS = []
let search_address = document.getElementById('address')

function search(input_text) {
    search_address.style.display = "block"

    let word_input = input_text.value

//ที่อยู่
thailand_address = thailand_address.replace(/\t/gm,"，")
    const THAILAND_ADdRESS = thailand_address.split("\n")

    if (word_input.length > 1) {
      let PATTERN = new RegExp(`(${(word_input)})`, "gm");
      RESULTS = THAILAND_ADdRESS.filter(function(str) {
        return PATTERN.test(str);
      });
      let results = RESULTS.toString()
      .replace(/,/gm,"</span><br><span onclick=\"addAddress(this)\">")
      search_address.innerHTML = "<small><span onclick=\"addAddress(this)\">" + results + "<br>"

    } else {
        search_address.innerHTML = "ไม่พบที่อยู่...<br>"
    }
  } 

  function addAddress(whole_address) {
    const WHOLE_ADdRESS = whole_address.textContent.split("，")
    document.querySelector('input[name="tambol"]').value = WHOLE_ADdRESS[0]
    document.querySelector('input[name="amphoe"]').value = WHOLE_ADdRESS[1]
    document.querySelector('input[name="province"]').value = WHOLE_ADdRESS[2]
    document.querySelector('input[name="postcode"]').value = WHOLE_ADdRESS[3]
    console.log(whole_address.textContent);
    search_address.style.display = "none"
  }