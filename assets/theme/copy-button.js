// Turn off ESLint for this file because it's sent down to users as-is.
/* eslint-disable */
if (navigator.clipboard) {
	window.addEventListener('load', function() {
		function button(label, ariaLabel, icon, className) {
			const btn = document.createElement('button');
			btn.classList.add('btnIcon', 'btnClipboard', className);
			btn.setAttribute('type', 'button');
			btn.setAttribute('data-label', label);
			btn.setAttribute('aria-label', ariaLabel);
			btn.innerHTML =
			'<div class="btnIcon__body">' +
			icon +
			'<strong class="btnIcon__label">' +
			label +
			'</strong>' +
			'</div>';
			return btn;
		}
		
		function addButtons(codeBlockSelector, btn) {
			document.querySelectorAll(codeBlockSelector).forEach(function(code) {
			code.parentNode.appendChild(btn.cloneNode(true));
			});
		}
		
		const copyIcon =
			'<svg width="12" height="12" viewBox="340 364 14 15" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M342 375.974h4v.998h-4v-.998zm5-5.987h-5v.998h5v-.998zm2 2.994v-1.995l-3 2.993 3 2.994v-1.996h5v-1.995h-5zm-4.5-.997H342v.998h2.5v-.997zm-2.5 2.993h2.5v-.998H342v.998zm9 .998h1v1.996c-.016.28-.11.514-.297.702-.187.187-.422.28-.703.296h-10c-.547 0-1-.452-1-.998v-10.976c0-.546.453-.998 1-.998h3c0-1.107.89-1.996 2-1.996 1.11 0 2 .89 2 1.996h3c.547 0 1 .452 1 .998v4.99h-1v-2.995h-10v8.98h10v-1.996zm-9-7.983h8c0-.544-.453-.996-1-.996h-1c-.547 0-1-.453-1-.998 0-.546-.453-.998-1-.998-.547 0-1 .452-1 .998 0 .545-.453.998-1 .998h-1c-.547 0-1 .452-1 .997z" fill-rule="evenodd"/></svg>';
		
		/* add buttons to accordion content */
		addButtons(
			'.uol-accordion__content .uol-rich-text',
			button('Copy text', 'Copy text to clipboard', copyIcon, 'btnClipboardText'),
		);
		addButtons(
			'.uol-accordion__content .uol-rich-text',
			button('Copy HTML', 'Copy HTML to clipboard', copyIcon, 'btnClipboardHTML'),
		);
		/* add buttons to other pages */
		addButtons(
			'.uol-copiable',
			button('Copy text', 'Copy text to clipboard', copyIcon, 'btnClipboardText'),
		);
		addButtons(
			'.uol-copiable',
			button('Copy HTML', 'Copy HTML to clipboard', copyIcon, 'btnClipboardHTML'),
		);

		

		document.querySelectorAll('.btnClipboard').forEach( el => el.addEventListener('click', (event) => {
			var toCopy = event.currentTarget.parentNode.querySelector(':first-child');
			var copiedContent = event.currentTarget.classList.contains('btnClipboardHTML')? toCopy.innerHTML: toCopy.textContent;
			var textEl = event.currentTarget.querySelector('.btnIcon__label');
			var originalLabel = event.currentTarget.getAttribute('data-label');
			navigator.clipboard.writeText(copiedContent)
				.then(() => {
					textEl.textContent = 'Copied!';
				})
				.catch(() => {
					textEl.textContent = 'Copy failed';
				});
			setTimeout(function() {
				textEl.textContent = originalLabel;
			}, 2000);
		}, false));
	});
}