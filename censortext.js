//censortext.js

var censoredWords = ["sad", "mad", "bad", "fuck", "fag", "bitch", "whore", "cunt"];
var customCensoredWords = ["goodybyes", "fudge", "fag", "bag"];

function censor(inStr){
	for ( word in censoredWords ){
		inStr = inStr.replace( censoredWords[word], "*****" );
	}
	for ( word in customCensoredWords ){
		inStr = inStr.replace( customCensoredWords[word], "****");
	}

	return inStr;
}

function addCensoredWord(word){
	customCensoredWords.push(word);
}
function getCensoredWords(){
	return censoredWords.concat(customCensoredWords);
}

//exporting the created functions ? in the exports module ?

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;