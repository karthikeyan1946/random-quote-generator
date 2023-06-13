const tag=document.querySelector('#quote-tags')
const text=document.querySelector('#quote-text')
const author=document.querySelector('#quote-author')
const btn=document.querySelector('#btn-quote-gen')
async function quoteGen(){
    try{
    let quote= await axios.get('https://api.quotable.io/random')
    let data=quote.data;
    console.log(data)
    text.innerText=data.content
    tag.innerText=data.tags[0]
    author.innerText=data.author
    }catch(e){
        console.log('error',e)
    }

}
btn.addEventListener('click',quoteGen)

