const input=document.querySelector('input')
const list=document.querySelector("ul")

const arr1=[
    {
        photo:"https://randomuser.me/api/portraits/men/62.jpg",
        name:"Nikolaj",
        surname:"Hansen",
        city:"Bykle",
        country:"Norway"
    },
    {
        photo:"https://randomuser.me/api/portraits/women/2.jpg",
        name:"Alexis",
        surname:"Hale",
        city:"Canberra",
        country:"Australia"
    },
    {
        photo:"https://randomuser.me/api/portraits/men/93.jpg",
        name:"Connor",
        surname:"Bradford",
        city:"Ottava",
        country:"Canada"
    },
    {
        photo:"https://randomuser.me/api/portraits/men/53.jpg",
        name:"Sidney",
        surname:"Poole",
        city:"Copenhagen",
        country:"Denmark"
    },
    {
        photo:"https://randomuser.me/api/portraits/women/54.jpg",
        name:"Alexa",
        surname:"Mills",
        city:"Nassau",
        country:"Bahamas"
    },
    {
        photo:"https://randomuser.me/api/portraits/women/55.jpg",
        name:"Tiana",
        surname:"Rivers",
        city:"Washington D.C.",
        country:"United States"
    },
    {
        photo:"https://randomuser.me/api/portraits/men/85.jpg",
        name:"Haydn",
        surname:"Hoffman",
        city:"Dublin",
        country:"Ireland"
    }
]
arr1.forEach((element)=>{
    const ListItem=document.createElement('li')
    ListItem.innerHTML=`
                    <img src="${element.photo}" alt="">
                    <div>
                        <h2>${element.name} ${element.surname}</h2>
                        <h3>${element.city},${element.country}</h3>
                    </div>`
    list.appendChild(ListItem)
})
//Menim yazdigim kod:
// input.addEventListener('keydown',()=>{
//     for(let i=0;i<arr1.length;i++){
//         for(let j=1;j<Object.values(arr1[i]).length;j++){
//             if(Object.values(arr1[i])[j].toLocaleLowerCase().search(input.value.toLocaleLowerCase())<0){
//                 list.querySelectorAll('li')[i].style.display='none'
//             }
//             else{
//                 list.querySelectorAll('li')[i].style.display='flex'
//             }
//             console.log(Object.values(arr1[i])[j].toLocaleLowerCase());
//         }
//         console.log("");
//     }
// })

//GPT nin yazdigi kod:
// input.addEventListener('keydown', () => {
//     let searchValue = input.value.toLocaleLowerCase();

//     // Loop through each item in arr1
//     for (let i = 0; i < arr1.length; i++) {
//         let matchFound = false; // Flag to track if a match is found

//         // Loop through the values of the current object
//         for (let j = 1; j < Object.values(arr1[i]).length; j++) {
//             if (Object.values(arr1[i])[j].toLocaleLowerCase().search(searchValue) >= 0) {
//                 matchFound = true; // Set the flag if a match is found
//                 break; // Exit the inner loop if a match is found
//             }
//         }

//         // Set display style based on whether a match was found
//         if (matchFound) {
//             list.querySelectorAll('li')[i].style.display = 'flex';
//         } else {
//             list.querySelectorAll('li')[i].style.display = 'none';
//         }
//     }
// });

//Menim duzelis elediyim GPT kodu:
input.addEventListener('keydown', () => {
    for (let i = 0; i < arr1.length; i++) {
        let f = false;
        for (let j = 1; j < Object.values(arr1[i]).length; j++) {
            if (Object.values(arr1[i])[j].toLocaleLowerCase().search(input.value.toLocaleLowerCase()) >= 0) {
                f = true;
            }
        }
        if (f) {
            list.querySelectorAll('li')[i].style.display = 'flex';
        } else {
            list.querySelectorAll('li')[i].style.display = 'none';
        }
    }
});