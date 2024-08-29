

/*Start Bars*/
let bars = document.querySelector(".icon") ;
let tab = document.querySelector("header .container .focus");
let TabContent  =document.querySelector("header .container .focus .foc-ul");


let ClickFlag = 0 ;
bars.addEventListener("click" , ()=>{
    if (ClickFlag === 0)
    {
        tab.style.visibility = "visible";
        tab.style.height = "112px";
        tab.style.top = "98%";
        TabContent.style.visibility = "visible";
        ClickFlag++ ;
    }
    else
    {
        tab.style.visibility = "hidden";
        tab.style.height = "0";
        TabContent.style.visibility = "hidden";
        ClickFlag--;
    }
  
});

/*end Bars*/


let AddToCart = document.querySelectorAll(".price button");
let Box = document.querySelectorAll(".items .row .box");

let addBtnFlag = 0 ;

AddToCart.forEach((AddToCartBtn)=>{
    
   let Quantity = 0 ;

    AddToCartBtn.addEventListener("click" , (e)=>{

        e.target.style.display = "none"; 
       
        /*Create a DIV for quantity box and cart*/
        let AddQuantity = document.createElement("div");

        AddQuantity.style.display = "flex";
        AddQuantity.style.gap = "5px";

        /*Create Add Button*/
        let addBtn = document.createElement("button");

        addBtn.innerHTML = "add";
        addBtn.style.backgroundColor = "#0dcaf0";


        /*Create quantity counter box*/
        let cart = document.createElement("input");
        cart.setAttribute("type", "number");
        cart.classList.add("cart-input"); 
        cart.style.width = "56px";
        cart.style.height = "37px";
        cart.style.borderRadius = "4px";

      
        e.target.parentNode.appendChild (AddQuantity).appendChild(cart);
        e.target.parentNode.appendChild (AddQuantity).appendChild(addBtn);

        e.target.parentNode.appendChild (AddQuantity).style.order = "1";
        e.target.parentNode.querySelector(".price p").style.order = "2";
        
     
        e.target.parentNode.appendChild (AddQuantity).appendChild(cart).value = Quantity;

        e.target.parentNode.appendChild (AddQuantity).appendChild(cart).style.order = "1";
        e.target.parentNode.appendChild (AddQuantity).appendChild(addBtn).style.order = "2";


        addBtn.addEventListener("click" , (event)=>{
            event.target.parentNode.style.display = "none";
            e.target.style.display = "block";
            Quantity = e.target.parentNode.appendChild (AddQuantity).appendChild(cart).value ;

            
        });

        
        /*Add Items to cart*/
        addBtn.addEventListener("click", (e) => {
            Box.forEach(box => {
                if (box.contains(e.target)) {
                    let itemsCount = localStorage.getItem("itemsCount") || 0;
                    let newItemIndex = parseInt(itemsCount) + 1;

                    localStorage.setItem(`ItemImage_${newItemIndex}`,  box.querySelector(".items .image img").src);
                    localStorage.setItem(`ItemName_${newItemIndex}`, box.querySelector(".items .text h5").innerHTML);
                    localStorage.setItem(`ItemPrice_${newItemIndex}`, box.querySelector(".items .price p").innerHTML);
                    localStorage.setItem(`ItemQuantity_${newItemIndex}`,  Quantity);

                    localStorage.setItem("itemsCount", newItemIndex);

                    /*To Not Repeat element In cart*/
                    
                    if (newItemIndex >= 2)
                    {
                        for (let i=1 ; i<= newItemIndex - 1 ; i++)
                        {
                            if (localStorage.getItem(`ItemImage_${newItemIndex}`) === localStorage.getItem(`ItemImage_${i}`))
                            {
                                alert("Product Is Already In your Cart!");
                                newItemIndex -- ;
                                localStorage.setItem("itemsCount", newItemIndex);

                            }
                        }
                    }
                   
                }
            });
        });
    })
})



/*Filter Items*/

let CategoryListOption = document.querySelector("select");
let ItemCategory = document.querySelectorAll(".items .container .row .box");


    CategoryListOption.addEventListener("change", (e) => {
        const selectedValue = e.target.value;

        ItemCategory.forEach(item => {
            if (selectedValue === "all" || item.classList.contains(selectedValue)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });



/*End Filter Items*/



/*Start Header Position While Scrolling*/
let Header = document.querySelector("header");
window.addEventListener("scroll" , ()=>{
    let CurrentHeaderPosition = document.documentElement.scrollTop;
    console.log(CurrentHeaderPosition)
    /*{
        Header.style.top = "-74px"
    }
    else
    {
        Header.style.top = "0"

    }*/

    

})


/*End Header Position While Scrolling*/

