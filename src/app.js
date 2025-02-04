document.addEventListener("DOMContentLoaded", e =>{ // un écouteur js avec l'objet document
    console.log(e.target)

    /* prompt */
    let firstName, lastName, age, tabUser, element, btn, stock, unstock, userIndex

        btn = document.querySelector("section button") /* btn pour l'utilisateur */
      
        element = document.querySelector("section h2")

        /* btn event */

        btn.addEventListener("click",()=>{
            // alert(btn.tagName)
            callPrompt.dialog()
        })

       const callPrompt = {
            
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


})