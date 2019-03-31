let content = '';

for (let i = 0;  i < 256; i++){
  content += String.fromCharCode ( i )
}

document.body.innerHTML = content;
