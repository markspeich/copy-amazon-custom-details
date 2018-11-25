$('#myo-order-details-container').children().eq(2).prepend('<div><button id="cpy">Copy Customizations</button></div>')

$('#cpy').click(function() {
    var s = ""
    $('tr').each(function() {
        var foundOne = false
        $(this).find('.a-list-item').each(function (index) {
            $(this).children().each(function() {
                s = s + " " + $(this)[0].innerText
                foundOne = true
            })
            s = s + "\n"
        })
        if (foundOne) {
            s = s + "\n"
        }
    })
    console.log(s)
    fallbackCopyTextToClipboard(s)
    navigator.clipboard.writeText(s).then(function() {
          console.log('Async: Copying to clipboard was successful!');
        }, function(err) {
          console.error('Async: Could not copy text: ', err);
        }
    )
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

