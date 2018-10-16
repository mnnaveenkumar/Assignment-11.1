var Para = document.createElement('p');
Para.innerText = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";
Para.style.color = 'purple';
document.body.appendChild(Para);

var anotherPara = document.createElement('p');
anotherPara.innerText = "A Web page is a document. This document can be either displayed in the browser window or as the HTML source. But it is the same document in both cases. The Document Object Model (DOM) represents that same document so it can be manipulated. The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.";
anotherPara.style.color = 'red';
document.body.appendChild(anotherPara);
document.bgColor = 'lightgrey';