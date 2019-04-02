// // document-write.js:5 Failed to execute 'write' on 'Document': It isn't possible to write into a document
// // from an asynchronously-loaded external script unless it is explicitly opened.
// document.write('hello');

const element = document.createElement('div');
element.innerText = 'This is my ad';
document.querySelector('#my-ad').append(element);
