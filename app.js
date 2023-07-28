const tabs = document.querySelectorAll('.tabs')

for (const tab of tabs) {
  tab.addEventListener('click', () => {
    clearActiveClasses()
    tab.classList.add('active')
  })
}

function clearActiveClasses() {
  tabs.forEach((tab) => {
    tab.classList.remove('active')
  })
}

const hearts = document.querySelectorAll('.heart')
for (const heart of hearts) {
  heart.addEventListener('click', () => {
    heart.classList.toggle('active')

  })
}

// Функция для открытия и закрытия табов
$(document).ready(function () {
  $(".content").hide();
  $(".content").first().show();

  $(".tabs").on("click", function (e) {
    e.preventDefault();

    $(".content").hide();
    let index = $(this).index();
    $(".content").eq(index).show();
  });
});

function moveCardUp(card) {
  card.classList.add('move-up');
}
function moveCardDown(card) {
  card.classList.remove('move-up');
}




window.addEventListener("scroll", function () {
  let scrollButton = document.querySelector('.scroll-block');
  if (this.window.scrollY > 1500) {
    scrollButton.classList.add('show');
  } else {
    scrollButton.classList.remove('show');
  }
});


// Поиск
$(document).ready(function() {
  $('.search-icon').click(function(event) {
    $('#search, #results').toggleClass('active')
  })
})

document.addEventListener("DOMContentLoaded", function() {
  const data = [
    { "name": "Blue chair" },
    { "name": "Продукт 2" },
    { "name": "Продукт 3" },
    { "name": "Другой продукт" },
    { "name": "Еще один продукт" },
    { "name": "Поиск" },
    { "name": "Поискать что-то" }
  ];

  const searchInput = document.getElementById("search");
  const resultsDiv = document.getElementById("results");

  searchInput.addEventListener("input", function() {
    const searchText = searchInput.value.toLowerCase();
    const results = data.filter(item => item.name.toLowerCase().includes(searchText));

    // Отображение результатов поиска
    let resultHtml = "<ul>";
    results.forEach(function(item) {
      resultHtml += '<a href="#product">' + item.name + '</a>';
    });
    resultHtml += "</ul>";

    resultsDiv.innerHTML = resultHtml;
  });
});

$(function () {
	$("#lower-message").slideUp()
	$(".lower").on("click", function () {
		$("#lower-message").slideToggle()
	})
})


// Избранное
$(document).ready(function () {
  $(".heart").on("click", function () {
    const iCard = $(this).closest(".i-card");
    const imageSrc = iCard.find(".im").attr("src");
    const productName = iCard.find("h3").text();
    const productPrice = iCard.find(".price").text();
    const itemId = productName.replace(/\s/g, "-");
    const listItem = `<li id="${itemId}">
                        <img src="${imageSrc}" alt="Product Image">
                        <h4>${productName}</h4>
                        <p>${productPrice}</p>
                        <button class="delete-btn" data-item="${itemId}">&#10005;</button>
                      </li>`;

    $("#list-item-lower").append(listItem);
  });

  $(document).on("click", ".delete-btn", function () {
    const itemId = $(this).data("item");
    $("#" + itemId).remove();
  });
});

$("#items-basket").text("(" + ($("#list-item").children().length) + ")");



// КОРЗИНА

$(function () {

	// Открытие / закрытие корзины
	$("#cart-items").slideUp()
	$(".card-bs").on("click", function () {
		$("#cart-items").slideToggle()
	})

	$("#items-basket").text("(" + ($("#list-item").children().length) + ")");

	// Функция для пересчета общей стоимости товаров в корзине
	function calculateTotalPrice() {
		var totalPrice = 0;
		$(".eachPrice").each(function () {
			var priceText = $(this).text().replace(/\s/g, "").replace(",", ".");
			var price = parseFloat(priceText);
			totalPrice += price;
		});
		$("#total-price").text(totalPrice.toFixed(2) + " $");

		// Проверяем наличие товаров в корзине и показываем/скрываем кнопку "Оформить заказ"
		if ($("#list-item").children().length > 0) {
			$(".btn-basket").show();
		} else {
			$(".btn-basket").hide();
		}
	}

	// Добавление товара в корзину
	$(".i-card .basket").on("click", function () {
		var name = $(this).closest(".i-card ").find("h3").text();
		var priceText = $(this).closest(".i-card ").find(".price").text();
		var price = parseFloat(priceText.replace(/\s/g, "").replace(",", "."));
		var remove = "<button class='remove'> X </button>";
		var cena = "<span class='eachPrice'>" + price.toFixed(2) + " $</span>";
		$("#list-item").append("<li>" + name + " - " + cena + remove + "</li>");
		// Получаем номер каждого элемента
		$("#items-basket").text("(" + ($("#list-item").children().length) + ")");
		// Пересчет общей стоимости
		calculateTotalPrice();
		// Добавляем товар в localStorage
		var orderItems = JSON.parse(localStorage.getItem("orderItems")) || [];
		orderItems.push({ name: name, price: price });
		localStorage.setItem("orderItems", JSON.stringify(orderItems));

		// Обновляем выбранные товары на странице заказа
		updateOrderItems();
	});

	// Удаление товара из корзины
	$("#list-item").on("click", ".remove", function () {
		$(this).parent().remove();
		$("#items-basket").text("(" + ($("#list-item").children().length) + ")");
		// Пересчет общей стоимости
		calculateTotalPrice();
		// Обновляем выбранные товары на странице заказа
		updateOrderItems();
	});
})




const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  allowTouchMove: false,
  speed: 3000,
  effect: 'fade',
  autoplay:

  {
    delay: 5000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
