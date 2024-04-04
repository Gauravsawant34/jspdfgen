function createResume() {
  const personal = document.getElementById("personalInfo").value;
  const projectsDeets = document.getElementById("projectsDeets").value;

  const personal2 = document.getElementById("personalInfo2").value;
  const projectsDeets3 = document.getElementById("projectsDeets3").value;

  let myText = `<html>
          <head>
            <title>My Resume</title>
              <link rel='stylesheet' type='text/css' href='course.css' />
              </head>
         <body>
         `;

  myText += `<div>
                 <div class='left'> Title </div>
                 <div class='right'> ${personal} </div>
               </div>
                  <br>`;

  myText += `<div>
           <div class='left'> next point </div>
           <div class='right'> ${projectsDeets} </div>
         </div>
           <br>`;

  myText += `<div>
                 <div class='left'> next point </div>
                 <div class='right'> ${personal2} </div>
               </div>
                  <br>`;

  myText += `<div>
           <div class='left'> last point </div>
           <div class='right'> ${projectsDeets3} </div>
         </div>
           <br>`;

  myText += `<div class='dwbutton'>
            <br>
            <input type='button' id='download' name='download' value='Download' onclick='window.print()' />
            </div>
          </body>
          </html>`;

  let flyWindow = window.open(
    "about:blank",
    "myResume",
    "width=800,height=800,left=200,top=200"
  );
  flyWindow.document.write(myText);
}
