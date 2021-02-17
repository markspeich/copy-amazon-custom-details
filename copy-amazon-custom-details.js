// COPY INTO CJS
// 2/17/2021
$('.a-expander-extend-container').ready(() => {
  console.log("READY!!!!!")
  $('#sc-content-container').prepend('<div><button style="margin: 10px;font-size: 2rem;" id="cpy">Copy Customizations</button></div>')
  $('#cpy').click(function () {
    console.log("Copy button clicked")
    var s = ""
    $('.a-expander-container').each(function () {
      let text = ""
      let rush = false
      let ssStraw = false
      $(this).find('div').each(function (index) {
        var foundOne = false
        let line = ""
        $(this).children('span').each(function (index) {
          let t = $(this)[0].innerText
          t = t.trim().replace(':', ': ')
          line = line + t
          foundOne = true
          console.log("t: [" + t + "]")
          console.log("line: [" + line + "]")
        })
        console.log("Completed line: " + line)
        if (foundOne) {
          if (!/^Front:/.test(line) && !/^Surface.*:/.test(line) && !/^Customization Group.*:/.test(line) && !/^Font Color:.*Stainless Steel.*/.test(line) && !/^Rush Order.*:.*No/.test(line) && !/^Font: Design.*/.test(line) && !/^Font: Font$/.test(line) && !/^Stainless Steel Straw: No$/.test(line)) {
            let skipLine = false
            if (/^Rush Order/.test(line)) {
              rush = true
              skipLine = true
            }
            if (/^Stainless Steel Straw/.test(line)) {
              ssStraw = true
              skipLine = true
            }
            if (!skipLine) {
              text = text + line + "\n"
            }
          } else {
          }
        }
        console.log("div completed. text=[" + text + "] rush=" + rush + ", ssStraw=" + ssStraw)
      })
      console.log(".a-expander-container completed")
      // Add rush order to the end
      if (rush) {
        text = text + "Rush Order: Yes\n"
      }
      if (ssStraw) {
        text = text + "Stainless Steel Straw: Yes\n"
      }
      s = s + text + "\n"
    })
    console.log(s)
    fallbackCopyTextToClipboard(s)
    navigator.clipboard.writeText(s).then(function () {
      console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
      console.error('Async: Could not copy text: ', err);
    }
    )
  })

})

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
