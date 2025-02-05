document.addEventListener("DOMContentLoaded", e =>{ // un écouteur js avec l'objet document
    console.log(e.target)

    /* prompt */
    let firstName, lastName, age, tabUser, 
        element, btn, stock, unstock, userIndex, image

        image = document.querySelector("img")
        btn = document.querySelector("section button") /* btn pour l'utilisateur */
      
        element = document.querySelector("section h2")

        /* btn event */

        btn.addEventListener("click",()=>{
            // alert(btn.tagName)
            callPrompt.dialog()
        })

       const callPrompt = {

            logo: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
            
            // méthode prompt
            dialog(){
                firstName = String(window.prompt("Ajoutez votre nom",""))
                lastName = String(window.prompt("Ajoutez votre prénom",""))
                age = Number(window.prompt("Ajoutez votre age",""))
        
                tabUser = []
        
                tabUser.push(firstName, lastName, age)
        
                console.info(tabUser)
        
                /* zone de stockage */
        
                stock = localStorage.setItem("user", JSON.stringify(tabUser)) /* item + valeur */
        
                unstock = localStorage.getItem("user")
                userIndex = JSON.parse(unstock).join(" / ")
                console.log(userIndex)
        
                element.innerHTML = `🚀 Bonjour <strong>${lastName}</strong> voici vos données ${userIndex}`
            }
        }

        image.src = callPrompt.logo
      
       

})