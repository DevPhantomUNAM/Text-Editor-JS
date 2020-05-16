function enableEditMode() {
    textField.document.designMode = 'On'
}

//Botones para editar el texto
var buttonBold = document.getElementById('buttonBold')
var buttonItalic = document.getElementById('buttonItalic')
var buttonUnderline = document.getElementById('buttonUnderline')
var buttonAlignLeft = document.getElementById('buttonAlignLeft')
var buttonAlignCenter = document.getElementById('buttonAlignCenter')
var buttonAlignRight = document.getElementById('buttonAlignRight')
var buttonAlignJustify = document.getElementById('buttonAlignJustify')
var buttonIdent = document.getElementById('buttonIndent')
var buttonDedent = document.getElementById('buttonDedent')
var buttonCut = document.getElementById('buttonCut')
var buttonCopy = document.getElementById('buttonCopy')
var buttonUndo = document.getElementById('buttonUndo')
var buttonRepeat = document.getElementById('buttonRepeat')
var buttonListOl = document.getElementById('buttonListOl')
var buttonListUl = document.getElementById('buttonListUl')
var buttonLink = document.getElementById('buttonLink')


buttonBold.addEventListener('click',function () {
    textField.document.execCommand('bold', false, null);
})
buttonItalic.addEventListener('click',function () {
    textField.document.execCommand('italic', false, null);
})
buttonUnderline.addEventListener('click',function () {
    textField.document.execCommand('underline', false, null);
})
buttonAlignLeft.addEventListener('click',function () {
    textField.document.execCommand('justifyLeft', false, null);
})
buttonAlignCenter.addEventListener('click',function () {
    textField.document.execCommand('justifyCenter', false, null);
})
buttonAlignRight.addEventListener('click',function () {
    textField.document.execCommand('justifyRight', false, null);
})
buttonAlignJustify.addEventListener('click',function () {
    textField.document.execCommand('justifyFull', false, null);
})
buttonIndent.addEventListener('click',function () {
    textField.document.execCommand('indent', false, null);
})
buttonDedent.addEventListener('click',function () {
    textField.document.execCommand('outdent', false, null);
})
buttonUndo.addEventListener('click',function () {
    textField.document.execCommand('undo', false, null);
})
buttonRepeat.addEventListener('click',function () {
    textField.document.execCommand('redo', false, null);
})
buttonCut.addEventListener('click',function () {
    textField.document.execCommand('cut', false, null);
})
buttonCopy.addEventListener('click',function () {
    textField.document.execCommand('copy', false, null);
})
buttonListOl.addEventListener('click',function () {
    textField.document.execCommand('insertOrderedList', false, null);
})
buttonListUl.addEventListener('click',function () {
    textField.document.execCommand('insertUnorderedList', false, null);
})
buttonLink.addEventListener('click',function () {
    textField.document.execCommand('createLink', false, prompt('Enter a URL','http://') );
})

//Botones para cambiar el heading
var h1 = document.getElementById('h1')
var h2 = document.getElementById('h2')
var h3 = document.getElementById('h3')
var h4 = document.getElementById('h4')
var h5 = document.getElementById('h5')

h1.addEventListener('click',function () {
    textField.document.execCommand('formatBlock', false, "H1");
})
h2.addEventListener('click',function () {
    textField.document.execCommand('formatBlock', false, "H2");
})
h3.addEventListener('click',function () {
    textField.document.execCommand('formatBlock', false, "H3");
})
h4.addEventListener('click',function () {
    textField.document.execCommand('formatBlock', false, "H4");
})
h5.addEventListener('click',function () {
    textField.document.execCommand('formatBlock', false, "H5");
})

//Botones para cambiar la fuente

var textdropdownMenuButtonHeading = document.getElementById('dropdownMenuButtonHeading')


var font1 = document.getElementById('Arial')
var font2 = document.getElementById('Comic')
var font3 = document.getElementById('Courtier')
var font4 = document.getElementById('Georgia')
var font5 = document.getElementById('Tahoma')
var font6 = document.getElementById('Verdana')

font1.addEventListener('click',function () {
    textField.document.execCommand('fontName', false, "Arial");
    textdropdownMenuButtonHeading.innerText = "Arial";
})
font2.addEventListener('click',function () { 
    textField.document.execCommand('fontName', false, "Comic Sans MS");
    textdropdownMenuButtonHeading.innerText = "Comic Sans MS";
})
font3.addEventListener('click',function () {
    textField.document.execCommand('fontName', false, "Courtier");
    textdropdownMenuButtonHeading.innerText = "Courtier";
})
font4.addEventListener('click',function () { 
    textField.document.execCommand('fontName', false, "Georgia");
    textdropdownMenuButtonHeading.innerText = "Georgia";
})
font5.addEventListener('click',function () {
    textField.document.execCommand('fontName', false, "Tahoma");
    textdropdownMenuButtonHeading.innerText = "Tahoma";
})
font6.addEventListener('click',function () { 
    textField.document.execCommand('fontName', false, "Verdana");
    textdropdownMenuButtonHeading.innerText = "Verdana";
})


//botones para cambiar el tamaño 

var textDropdownMenuButtonSize = document.getElementById('dropdownMenuButtonSize')

var size1 = document.getElementById('ocho')
var size2 = document.getElementById('nueve')
var size3 = document.getElementById('diez')
var size4 = document.getElementById('once')
var size5 = document.getElementById('doce')
var size6 = document.getElementById('catorce')
var size7 = document.getElementById('dieciocho')

size1.addEventListener('click',function () {
    textField.document.execCommand('fontSize', false, "1");
    textDropdownMenuButtonSize.innerText = size1.innerText;
})
size2.addEventListener('click',function () {
    textField.document.execCommand('fontSize', false, "2");
    textDropdownMenuButtonSize.innerText = size2.innerText;
})
size3.addEventListener('click',function () {
    textField.document.execCommand('fontSize', false, "3");
    textDropdownMenuButtonSize.innerText = size3.innerText;
})
size4.addEventListener('click',function () {
    textField.document.execCommand('fontSize', false, "4");
    textDropdownMenuButtonSize.innerText = size4.innerText;
})
size5.addEventListener('click',function () {
    textField.document.execCommand('fontSize', false, "5");
    textDropdownMenuButtonSize.innerText = size5.innerText;
})
size6.addEventListener('click',function () {
    textField.document.execCommand('fontSize', false, "6");
    textDropdownMenuButtonSize.innerText = size6.innerText;
})
size7.addEventListener('click',function () {
    textField.document.execCommand('fontSize', false, "7");
    textDropdownMenuButtonSize.innerText = size7.innerText;
})


//Botones para cambiar el color del texto

foreColor = document.getElementById('foreColor');
hiliteColor = document.getElementById('hiliteColor');

foreColor.addEventListener('change',function () {
    textField.document.execCommand('foreColor', false, foreColor.value); 
})
hiliteColor.addEventListener('change',function () {
    textField.document.execCommand('hiliteColor', false, hiliteColor.value); 
})

//Botones para insertar imagen
var buttonImage = document.getElementById('buttonImage')
// var upload = document.getElementById('upload-photo')


buttonImage.addEventListener('click',function () {
    textField.document.execCommand('insertImage', false, prompt('Enter the image URL','') );
})

function previewFile() {
  
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.onloadend = function () {
      
      textField.document.execCommand('insertImage', false, reader.result );
  
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
     
    }
  }

