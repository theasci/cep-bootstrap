//@include "models/Dialog.jsx"

function openDocument(path){
	var fileRef = new File(path)
	var docRef = app.open(fileRef)
}
