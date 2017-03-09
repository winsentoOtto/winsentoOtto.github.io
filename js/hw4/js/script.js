var wrapper = document.createElement('div');
wrapper.className = "wrapper";
document.body.insertBefore(wrapper, document.body.firstChild);

var title = document.createElement('div');
title.className = 'title';
title.innerHTML = 'Тест по программированию';
wrapper.appendChild(title);

// list

var list = document.createElement('ol');
list.className = 'questions';
wrapper.appendChild(list);

var listItem = document.createElement('li');
listItem.className = 'question';
listItem.innerHTML = 'Вопрос № <span>1</span>';
list.appendChild(listItem);

//checkboxes

var label = document.createElement('label');
listItem.appendChild(label);

var check = document.createElement('input');
check.type = 'checkbox';
label.appendChild(check);

var text = document.createElement('p');
text.innerHTML = 'Вариант ответа № <span>1</span>';
label.appendChild(text);

//clones

var label2 = label.cloneNode(true);
label2.querySelector('p').querySelector('span').innerHTML = '2';
label.parentNode.insertBefore(label2, label.nextSibling);

var label3 = label.cloneNode(true);
label3.querySelector('p').querySelector('span').innerHTML = '3';
label2.parentNode.insertBefore(label3, label2.nextSibling);

var listItem2 = listItem.cloneNode(true);
listItem2.querySelector('span').innerHTML = '2';
listItem.parentNode.insertBefore(listItem2, listItem.nextSibling);

var listItem3 = listItem.cloneNode(true);
listItem3.querySelector('span').innerHTML = '3';
listItem.parentNode.appendChild(listItem3);

//button

var button = document.createElement('button');
button.innerHTML = 'Проверить мои результаты';
wrapper.appendChild(button);
