let list = document.querySelector('ul');
      let input = document.querySelector('input');
      let button = document.querySelector('button');

      button.addEventListener('click', () => {
        let myItem = input.value;
        input.value = '';

        let listItem = document.createElement('li');
        let listText = document.createElement('span');
        let listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = 'X';
        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
          list.removeChild(listItem);
        });

        input.focus();
});