

/*Start Bars*/
let bars = document.querySelector(".icon") ;
let tab = document.querySelector("header .container .focus");
let TabContent  = document.querySelector("header .container .focus .foc-ul");


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

    window.addEventListener('load', () => {

        let tableBody = document.querySelector("#itemTable tbody");

        let itemsCount = localStorage.getItem("itemsCount") || 0;

       

        let itemCart = document.querySelector(".item-cart .container .head h5");
        itemCart.innerHTML = `You have ${itemsCount} Item in your Cart`;

        let SumTotal = 0 ;
  
        for (let i = 1; i <= itemsCount; i++) {
            let ImagePhotoinLocalStorage = localStorage.getItem(`ItemImage_${i}`);
            let NameinLocalStorage = localStorage.getItem(`ItemName_${i}`);
            let PriceinLocalStorage = localStorage.getItem(`ItemPrice_${i}`);
            let QuantityinLocalStorage = localStorage.getItem(`ItemQuantity_${i}`);

          

            if (ImagePhotoinLocalStorage && NameinLocalStorage && PriceinLocalStorage && QuantityinLocalStorage) {
                let row = document.createElement("tr");

                let imgCell = document.createElement("td");
                if (ImagePhotoinLocalStorage) {
                    let img = document.createElement("img");
                    img.src = ImagePhotoinLocalStorage;
                    img.style.width = "80px";
                    img.style.height = "80px";
                    imgCell.appendChild(img);
                }
                row.appendChild(imgCell);

                let nameCell = document.createElement("td");
                nameCell.textContent = NameinLocalStorage || "N/A";
                row.appendChild(nameCell);

                let priceCell = document.createElement("td");
                priceCell.innerHTML = PriceinLocalStorage;
                row.appendChild(priceCell);

                let quantityCell = document.createElement("td");
                quantityCell.textContent = QuantityinLocalStorage || "0";
                row.appendChild(quantityCell);

                let totalCell = document.createElement("td");
                let total = (parseFloat(PriceinLocalStorage) || 0) * (parseInt(QuantityinLocalStorage) || 0);
                totalCell.innerHTML = total.toFixed(2);
                totalCell.setAttribute("class" , "total");
                SumTotal +=  total ;
                row.appendChild(totalCell);

                let DeleteButtonCell = document.createElement("td");
                let DeleteButton = document.createElement("button");
                DeleteButtonCell.appendChild(DeleteButton);
                DeleteButton.innerHTML = "Delete";
                DeleteButton.style.backgroundColor = "#dc3545" ;
                DeleteButton.style.color = "white";
                DeleteButton.style.border = "none";
                DeleteButton.style.padding = "10px 20px";
                DeleteButton.style.borderRadius = "4px";
                DeleteButton.style.transition = "0.3s" 
                row.appendChild(DeleteButtonCell);

                DeleteButton.addEventListener("mouseover" , e=>{
                    e.target.style.backgroundColor = "#bb2d3b"
                })
                DeleteButton.addEventListener("mouseleave" , e=>{
                    e.target.style.backgroundColor = "#dc3545"
                })

                tableBody.appendChild(row);

            }  
        
        }


          /*Total Price of all Items*/
          const tfootCells = document.querySelectorAll(".item-cart tfoot tr td");
  
          let OrderButton = document.createElement ("button");
          OrderButton.innerHTML = "Order Now";
          OrderButton.style.backgroundColor = "#198754" ;
          OrderButton.style.color = "white";
          OrderButton.style.border = "none";
          OrderButton.style.padding = "10px 20px";
          OrderButton.style.borderRadius = "4px";
          OrderButton.style.transition = "0.3s" ;
  
          OrderButton.addEventListener("mouseover" , e=>{
              e.target.style.backgroundColor = "#157347"
          })
          OrderButton.addEventListener("mouseleave" , e=>{
              e.target.style.backgroundColor = "#198754"
          })
          
          if (tfootCells.length >= 6) {
              
              tfootCells[tfootCells.length - 2].innerHTML = `Total : ${SumTotal.toFixed(2)} LE`;
              tfootCells[tfootCells.length - 1].appendChild(OrderButton);
          }
  
  
  
           /*Order an Item*/
           OrderButton.addEventListener("click" , e=>{
              setTimeout(()=>{
                  document.querySelector(".order").style.display = "block";
                 
              } , 1000)
            
          })
  


         /*Delete Specific Row*/
         let buttons = document.querySelectorAll("#itemTable tbody button");
         buttons.forEach(button=>{
             button.addEventListener("click", (e) => {
                
                 let rows = document.querySelectorAll("#itemTable tbody tr");
             
                 rows.forEach(row => {
                    
                     if (row.contains(e.target)) {
                         SumTotal -= row.querySelector(".total").textContent;
                         tfootCells[tfootCells.length - 2].innerHTML = `Total : ${SumTotal.toFixed(2)} LE`;
                         row.remove();
                         itemsCount -- ;  
                         localStorage.setItem("itemsCount", itemsCount); 
                         itemCart.innerHTML = `You have ${itemsCount} Item in your Cart`;
                         
                     }
                 });
             });
         })
        


        
        

         /*Delete All Items*/
        let CleanAllCart = document.querySelector(".item-cart .container .head p");
        CleanAllCart.addEventListener("click" , (e)=>{
            localStorage.clear();
            for(let i=1 ; i<=itemsCount ; i++)
                {
                    tableBody.remove();
                    itemsCount = 0 ;
                    SumTotal = 0 ;
                    localStorage.setItem("itemsCount", itemsCount);
                    itemCart.innerHTML = `You have ${itemsCount} Item in your Cart`;
                    tfootCells[tfootCells.length - 2].innerHTML = `Total : ${SumTotal.toFixed(2)} LE`;
    
                } 
        })
    });

        



    

   



    