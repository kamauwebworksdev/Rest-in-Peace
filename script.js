


//JS For the Menu Items on the nav
        const MenuItems = document.getElementById("MenuItems");
        function menutoggle(){

            if(MenuItems.style.maxHeight == "0px"){
                MenuItems.style.maxHeight= "200px";
            } else {

                MenuItems.style.maxHeight= "0px";
            }
 
        }



        

// When the user scrolls down  80px from the top of the document, resize the navbar's padding and logo's font size

window.onscroll = function() 
{
    scrollFunction()
};


function scrollFunction() {

      if (document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50) {

        document.getElementById("navbar").style.padding = "15px";
        document.getElementById("logo").style.fontSize = "25px";

        } else {
                document.getElementById("navbar").style.padding = "40px 10px";
                document.getElementById("logo").style.fontSize = "20px";
            }
        }
