<?php 
// Get Data 
$name = strip_tags($_POST['name']); 
$phone = strip_tags($_POST['phone']); 
$message = strip_tags($_POST['message']); 
// $url = strip_tags($_POST['url']); 

// Вашу почту писать ниже
mail("mailto:navaweb@yandex.ru", "Заказ звонка StroyDom", 
"Имя: $name\nТелефон: $phone \nСообщение: $message\n", 
"From: Website Form Enquiry <$email>"); 

?> 

<script type="text/javascript">
setTimeout('location.replace("/thank.html")', 500);
/*Изменить текущий адрес страницы через 1 секунды (500 миллисекунд)*/
</script> 

