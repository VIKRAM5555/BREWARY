async function brewary(){
    try {
        var data=await fetch("https://api.openbrewerydb.org/breweries")
        data1= await data.json()
        console.log(data1)




        for(var i in data1){


            function adtag(s,c,e)
            { 
                 var a= document.createElement("div")
                 a.setAttribute("class",s)
                 a.innerHTML=c
                 e.append(a)
             }


             function adimage(e,b){
                var a= document.createElement("img")
                a.setAttribute("src",b)
               
                e.append(a)
             }

             var maindiv1=document.createElement("div")
             maindiv1.setAttribute("class","main")
             document.body.append(maindiv1)
        
               
             var name=data1[i].name
             adtag("name",name,maindiv1)
             
            
         
             var type=data1[i].brewery_type
             adtag("type","TYPE : "+type,maindiv1)
         
             var phone=data1[i].phone
             adtag("phone",phone,maindiv1)
             
             adimage(maindiv1,"index.png")
         
             var adlink=data1[i].website_url
             if(adlink===null){
                 adtag("url","",maindiv1)
             }
             else{
                 var b= document.createElement("button")
                 b.setAttribute("class","btn btn-info")
                 
                 b.innerHTML="visit"
                 b.addEventListener("click", function(){
                    location.reload(`${adlink}`)
                  });
                 maindiv1.append(b) 
                 
              

                 console.log(adlink)
             }
         
         
         
             var a1=data1[i].address_2
             if (a1===null) {
                 adtag("ad1","ADDRESS NOT FOUND",maindiv1)
             } else {
                 adtag("ad1","ADDRESS_1 : "+a1,maindiv1)
                 
             }
             var a2=data1[i].address_3
             if (a2===null) {
                 adtag("ad2","ADDRESS NOT FOUND",maindiv1)
             } else {
                 adtag("ad2","ADDRESS_2 : "+a2,maindiv1)
                 
             }
         
         

        }


    

        


    
    } catch (error) {
        
    }
}
brewary()