let divContainer = document.createElement('div');
divContainer.className = 'container';
document.body.append(divContainer);


let titile = document.createElement('h1');
titile.className = 'h1-titile';
titile.innerHTML = `RSS Виртуальная клавиатура`;
divContainer.prepend(titile);


let textArea = document.createElement('textarea');
textArea.className = 'text-area';
document.body.append(textArea);


let keyboard = document.createElement('div');
keyboard.className = 'keyboard';
document.body.append(keyboard);


// let keyBtn = document.createElement('div');
// keyBtn.className = 'key';
// keyboard.append(keyBtn);
// keyBtn.innerHTML = `${keysArr[0]}`;

  let keysArr = ['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace','Tab','q','w','e','r','t','y','u','i','o','p','[',']','Del','CapsLock','a','s','d','f','g','h','j','k','l',';',',',`Q`,"Enter",'Shift','z','x','c','v','b','n','m',`,`,`.`,`/`,``];

for (let i = 0; i < keysArr.length; ++i) {
  let keyBtn = document.createElement("div");  
  
  let key = document.createElement("p");
  key.innerHTML = keysArr[i];

  keyBtn.appendChild(key);

  keyboard.appendChild(keyBtn);
}
