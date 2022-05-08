console.log('hello i am from summary js extarnal file');

// p gula js diye paite caile 
const blogs = document.getElementsByTagName('p');
// console.log(blogs);

// sob koti p ke js acces kora hoiyese

// amra for loop diye korte pari
for (const blog of blogs) {
    // console.log(blog);
    blog.style.backgroundColor = 'steelblue';
    blog.style.color = 'white';
    blog.style.margin = '20px';
    blog.style.padding = '30px';
    blog.style.borderRadius = '50px';

}

// spacific kono kisu niye kaj korte caile 

const spacific = document.getElementById('spcieal-blog');
// spacific er text gula change korbo 
// spacific.innerText = 'the brown fox jumps over the laze dog';
// onno vabe korte pari 
spacific.innerHTML = `
<h3> i am from js</h3>
<p>আমার সোনার বাংলা আমি তোমায় ভালোবাসি চিরদিন তোমার আকাশ তোমার বাতাস আমার প্রানে বাজায় বাসি সোনার বাংলা আমি তোমায় ভালোবাসি  আমার সোনার বাংলা আমি তোমায় ভালোবাসি চিরদিন তোমার আকাশ তোমার বাতাস আমার প্রানে বাজায় বাসি সোনার বাংলা আমি তোমায় ভালোবাসি আমার সোনার বাংলা আমি তোমায় ভালোবাসি চিরদিন তোমার আকাশ তোমার বাতাস আমার প্রানে বাজায় বাসি সোনার বাংলা আমি তোমায় ভালোবাসি </p>
<p>আমার সোনার বাংলা আমি তোমায় ভালোবাসি চিরদিন তোমার আকাশ তোমার বাতাস আমার প্রানে বাজায় বাসি সোনার বাংলা আমি তোমায় ভালোবাসি  আমার সোনার বাংলা আমি তোমায় ভালোবাসি চিরদিন তোমার আকাশ তোমার বাতাস আমার প্রানে বাজায় বাসি সোনার বাংলা আমি তোমায় ভালোবাসি আমার সোনার বাংলা আমি তোমায় ভালোবাসি চিরদিন তোমার আকাশ তোমার বাতাস আমার প্রানে বাজায় বাসি সোনার বাংলা আমি তোমায় ভালোবাসি </p>
<p>আমার সোনার বাংলা আমি তোমায় ভালোবাসি চিরদিন তোমার আকাশ তোমার বাতাস আমার প্রানে বাজায় বাসি সোনার বাংলা আমি তোমায় ভালোবাসি আমার সোনার বাংলা আমি তোমায় ভালোবাসি চিরদিন তোমার আকাশ তোমার বাতাস আমার প্রানে বাজায় বাসি সোনার বাংলা আমি তোমায় ভালোবাসি আমার সোনার বাংলা আমি তোমায় ভালোবাসি চিরদিন তোমার আকাশ তোমার বাতাস আমার প্রানে বাজায় বাসি সোনার বাংলা আমি তোমায় ভালোবাসি  </p>
`