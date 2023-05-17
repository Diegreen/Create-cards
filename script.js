const users = [
    {
     name: 'Madalena',
     profile: 'Admin',
     sector: 'Administration'
   },
   {
     name: 'Rafael',
     profile: 'user',
     sector: 'Finance'
   },  
   {
     name: 'Baltazar',
     profile: 'user',
     sector: 'Reception'
   },  
   {
     name: 'Carmen',
     profile: 'Admin',
     sector: 'Business'
   }    
 ]

 function generateCards (users) {
    
    for(let i = 0; i < users.length; i++) {
        let usuario = users[i]

        let body = document.querySelector('body')
        let cards = document.createElement("span")
        cards.innerHTML = 'Ta aqui'
        cards.classList.add('cards')
        
        if(usuario.sector == "Administration" && usuario.profile == 'Admin') {
            cards.style.backgroundColor = '#748ffc'
        } else if (usuario.profile == 'user') {
            cards.style.backgroundColor = '#63e6be'
        } else {
            cards.style.backgroundColor = '#ffe066'
        }

        body.append(cards)
    }
 };

generateCards(users)