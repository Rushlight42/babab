(function() {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
          
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        year = today.getFullYear(),
        nextYear = year + 1,
        dayMonth = "01/01/",
        birthday = dayMonth + year;
    
    today = mm + "/" + dd + "/" + year;
    if (today > birthday) 
        {
      birthday = dayMonth + nextYear;
    }
    
    const countDown = new Date(birthday).getTime(),
        a = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          if (distance < 0) {
            document.getElementById("headline").innerText = "С новым годом!";
            document.getElementById("countdown").style.display = "none";
            clearInterval(a);
          }

        })
    }() )

    let a1 = ["background.jpg","background2.jpg","background3.jpg","background4.jpg"];
    let ala = 0;
    function but2(){ 
     ala +=1 
     if (ala==4){
      ala= 0;
     } 
     document.querySelector(".background-1").style.backgroundImage = `url(${a1[ala]}`;
    }

    function but1(){
      const gif= document.getElementById("myGif").style.display = 'block';
      gif.src = '';
      gif.src = 'iskra.gif'
    }
