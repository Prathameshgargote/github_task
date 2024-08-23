const cl=console.log


const userNameform=document.getElementById("userNameform")
const usernamecontrol=document.getElementById("usernamecontrol")
const cardcontainer=document.getElementById("cardcontainer")

//sequncelly
//parallarly
//race


// const makeAPIcall=(API_URL)=>{
//     return fetch(API_URL)
//     .then(res=>{
//         return res.json()
//     })
// }


// const postsurl=`https://jsonplaceholder.typicode.com/posts`
// const photourl=`https://jsonplaceholder.typicode.com/photos`
// const todourl=`https://jsonplaceholder.typicode.com/todos`


//  async function parallarlycall(){
//     let arrpromice=  [makeAPIcall (postsurl),makeAPIcall(photourl),makeAPIcall (todourl)]
//     let [posts,photos,todos]= await Promise.all(arrpromice)// all(array of promise)
//     cl(posts,photos,todos)
    

// }
// parallarlycall()

// // promise all()>> accept array of promise as a argument and return new promise
// //promise race()>>accept array of promise as a argumwnt and return a new promise

// const promiseRace=async()=>{
//     let arrpromice= [makeAPIcall (postsurl),makeAPIcall(photourl),makeAPIcall (todourl)]

//     let data=await Promise.race(arrpromice)
//     cl(data)
// }
// promiseRace()


const BASE_URL=`https://api.github.com/users`

const makeAPIcall= async(API_URL)=>{
        let res =await fetch(API_URL)
        return await res.json()
    
    }

    const templating=(arr)=>{
        let result=''
        arr.forEach(ele => {
            result+=`
            
                <div class="card">
                    <div class="card-header text-center">
                        <h5 class="text-center"> My github profile</h2>
                    </div>
                    <div class="card-body">
                        <div class="avtar border-2"  >
                            <img  class="img" src="${ele.avatar_url}" alt="">
                            <h2>  <a href="${ele.url}">${ele.name}</a>   </h2>
                        </div>
                    </div>
                   
                    <div class="card-footer">
                        <div class="fanfolw d-flex justify-content-between">
                               <p> <a href=""><p class="font-weight-bold">${ele.following}</p></a> followings</p>
                               <p> <a href=""><p class="font-weight-bold">${ele.followers}</p></a> followers</p>
                      </div>
                        <div class="repo mb-2">
                            <p>Repos:${ele.public_repos}</p> 
                        </div>
                        <div class="repourl border border-2 rounded-pill text-center mb-4  text-white">
                           <a href="${ele.repos_url}"> <p > MY REPOSITRY </p></a>
                        </div>
                    </div>
                </div>
              
            `
        })
        cardcontainer.innerHTML=result
    }
const onsubmit=async(ele)=>{
    ele.preventDefault()
    let userName=usernamecontrol.value;

    let userURL=`${BASE_URL}/${userName}`;
    let userRepo=`${BASE_URL}/${userName}/repos`

    let arrofform=[makeAPIcall(userURL)]
    let data=await Promise.all(arrofform)
    cl(data)
    templating(data)
    userNameform.reset()
    
    // let card=document.createElement("div")
    //     card.className="col-md-6 offset-md-3"
    //     card.innerHTML=`
          //  <div class="card">
            //         <div class="card-header text-center">
            //             <h5 class="text-center"> My github profile</h2>
            //         </div>
            //         <div class="card-body">
            //             <div class="avtar border-2"  >
            //                 <img  class="img" src="${data.avatar_url}" alt="">
            //                 <h2>NAME</h2>
            //             </div>
            //         </div>
                   
            //         <div class="card-footer">
            //             <div class="fanfolw d-flex justify-content-between">
            //                    <p> <a href=""><p class="font-weight-bold">${post.following}</p></a> followings</p>
            //                    <p> <a href=""><p class="font-weight-bold">${post.followers}</p></a> followers</p>
            //           </div>
            //             <div class="repo mb-2">
            //                 <p>Repos:0</p> 
            //             </div>
            //             <div class="repourl border border-2 rounded-pill text-center mb-4 ">
            //                <a href="${post.repos_url}"> <p > MY REPOSITRY </p></a>
            //             </div>
            //         </div>
            //     </div>
        
            //            `

    
    

}



userNameform.addEventListener("submit",onsubmit)