$('#sc-content-container').ready(() => {
	$('#sc-content-container').prepend('<div><button style="margin: 10px;font-size: 2rem;" id="cpy">Copy Customizations</button></div>')
	$('#cpy').click(function() {
			console.log("Copy button clicked")
			var s = ""
			$('.a-expander-container').each(function() {
					let text = ""
					$(this).find('div').each(function(index) {
							var foundOne = false
							$(this).children('span').each(function (index) {
									let t = $(this)[0].innerText
									t = t.trim().replace(':', ': ')
									console.log("t: ["+t+"]")
									text = text + t
									foundOne = true
							})
							if (foundOne) {
									text = text + "\n"
							}
							console.log("div completed. text=["+text+"]")
					})
					console.log(".a-expander-container completed")
					s = s + text + "\n"
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
