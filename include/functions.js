var functions = {};
functions.createTextArea = (data="",rows="10",cols="80") => {
	let rtn = `<textarea rows="${rows}" cols=${cols}>${data}</textarea>`;
	return rtn;
	}

module.exports = functions; 
