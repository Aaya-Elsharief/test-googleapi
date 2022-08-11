
let searchBtn = document.querySelector(".search-btn");
let input = document.querySelector(".search-query");
let result = document.querySelector(".search-results");




/*(function() {
    let xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let giphyObj = JSON.parse(xhr.responseText);
        let gifDrop = document.querySelector(".gif");
        let link = giphyObj.data[1].images.downsized_medium.url;
        gifDrop.src = link;
      }
    };
    xhr.open("GET", url, true);
  })();
*/


input.addEventListener('keyup',()=>{
    //console.log(input.value);
    let boksearch = input.value;
    let url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${boksearch}&printType=books`;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 ){
            if(xhr.status == 200){
               let {data} =JSON.parse(xhr.responseText);

             
               console.log(xhr.responseText)
          /*    let titles = [];

              data.forEach(function(e,i){titles.push(e.volumeInfo.title);});
                   console.log(titles);
          
               var newTitleString = titles.join(', ');
                   console.log(newTitleString);    
*/

               /*data.forEach(ele => {
                result.innerHTML += `<img src=${ele.images.original.url}>`;
               });
*/
            }else{
                result.textContent = `error ${xhr.readyState}`;
            }
        }
    };


    xhr.open('GET',url);
    //xhr.setRequestHeader('Authorization','token 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')

    xhr.send();
   
    
});



