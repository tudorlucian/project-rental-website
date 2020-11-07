var x = document.getElementById("registration-form"); /*creeare form */
var createform = document.createElement('form');
createform.setAttribute("action", ""); 
createform.setAttribute("method", "post"); 
x.appendChild(createform);                      /*pana aici */

var heading = document.createElement('h2'); /*pana la nume e headin creation */
heading.innerHTML = "Registration Form ";
createform.appendChild(heading);

var line = document.createElement('hr'); 
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var namelabel = document.createElement('label'); /* de aici e nume */
namelabel.innerHTML = "First Name : ";
createform.appendChild(namelabel);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var inputelement = document.createElement('input');
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);              /*pana aici */

var namelabel = document.createElement('label'); /* nume part deux */
namelabel.innerHTML = "Last Name : ";
createform.appendChild(namelabel);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var inputelement = document.createElement('input');
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);                  /*pana aici */

var emaillabel = document.createElement('label'); // email camp
emaillabel.innerHTML = "Your Email : ";
createform.appendChild(emaillabel);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);             

var emailelement = document.createElement('input'); // input email
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "demail");
createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

var passw = document.createElement('passw'); /* Password */
passw.innerHTML = "Password : ";
createform.appendChild(passw);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var passwordelement = document.createElement('input');
passwordelement.setAttribute("type", "password");
passwordelement.setAttribute("name", "dname");
createform.appendChild(passwordelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var passwordCheck = document.createElement('passwordCheck'); /* repeat Password */
passwordCheck.innerHTML = "Repeat password : ";
createform.appendChild(passwordCheck);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var passwordelement2 = document.createElement('input');
passwordelement2.setAttribute("type", "password");
passwordelement2.setAttribute("name", "dname");
createform.appendChild(passwordelement2);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var messagelabel = document.createElement('label'); // country select
messagelabel.innerHTML = "Country";
createform.appendChild(messagelabel);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var selectelement = document.createElement('select');
selectelement.setAttribute("name", "dmessage"); 
createform.appendChild(selectelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var submitelement = document.createElement('input'); // butonul
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement);

