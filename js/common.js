$(function () {
	// урл на xml файл
	var xmlUrl = $('#xmlUrl').val();

	// запрос в xml файл
	$.ajax({
		url: xmlUrl,
		type: 'GET',
		timeout: 60000,
		success: function (res) {

			// количество ссылок
			var result = $("a", res);
			$('#links_counter').text(result.length);

			// весь текст в тегах
			var allText = res.childNodes[0].textContent;

			// без пробелов
			linksTextWithoutSpaces = allText.replace(/[\d\[\]{}\s]/g, '');
			$('#links_without').text(linksTextWithoutSpaces.length);

			// с пробелами
			linksTextWithSpaces = allText.replace(/[\d\[\]{}]/g, '');
			$('#links_with').text(linksTextWithSpaces.length);

			var linksArr = [];

			result.each(function () {
				linksArr.push(this.attributes[0].value);
			});

			var brokenLink = 0

			linksArr.forEach(function (element) {
				if ($(element, res).length) {
				} else {
					brokenLink++;
				}
			});

			$('#broken_links').text(brokenLink);


		}
	});


});