//@include "../models/Dialog.jsx"
$.strict = true;

var response = Dialog.prompt('Prompting from test.jsx', 'test.jsx');
Dialog.alert(response);
