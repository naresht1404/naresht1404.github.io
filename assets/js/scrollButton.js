       // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
          var mybutton = document.getElementById('scrollBtn');
          if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }
        
        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }

        //when user click join button this function will be executed
        // To validate user details and for acknowledgment
        function submitUser(){
            var uname = document.getElementById('userName').value;
            var email = document.getElementById('email').value;
            var emailFormat = '/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
            if(uname == '' && email == ''){
                alert("Please enter name and email");
            }else if(email == '' && uname !== ''){
                alert("Please enter email");   
            }else if(uname == '' && email !== ''){
                alert("Please enter name");
            }else if(!emailFormat.match(email)) {
              alert("You have been successfully joined our email list")
            }else {
                alert("Please enter name and email");
            }
            uname.innerText = '';
            email.innerText = '';
        }
