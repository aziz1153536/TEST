function verif() {
  let ch1 = document.getElementById("a1").value.trim();
  let ch2 = document.getElementById("a2").value.trim();
  let ch3 = document.getElementById("a3").value; 
  let c1  = document.getElementById("c1");
  let c2  = document.getElementById("c2");
  let ch4 = document.getElementById("continent");
  let text = document.getElementById("textarea").value.trim();
  let mail = document.getElementById("mail").value.trim();
  let d1 = document.getElementById("d1");
  let d2 = document.getElementById("d2");
  let d3 = document.getElementById("d3");

  for(let i=0; i<ch1.length; i++){
    if(!(ch1.charAt(i).toUpperCase()>="A" && ch1.charAt(i).toUpperCase()<="Z" )){
      alert("Le champ de nom doit être alphabétique");
      return false;
    }
  }

  for(let i=0; i<ch2.length; i++){
    if(!(ch2.charAt(i).toUpperCase()>="A" && ch2.charAt(i).toUpperCase()<="Z" )){
      alert("Le champ de prénom doit être alphabétique");
      return false;
    }
  }

  for(let i=0; i<text.length; i++){
    if(!(text.charAt(i).toUpperCase()>="A" && text.charAt(i).toUpperCase()<="Z" )){
      alert("La description doit être alphabétique");
      return false;
    }
  }

  if(ch1 === ""){
    alert("Le champ de nom est vide !");
    return false;
  }

  if(ch2 === ""){
    alert("Le champ de prénom est vide !");
    return false;
  }

  if(ch3 !== ""){
    let birthYear = new Date(ch3).getFullYear();
    let currentYear = new Date().getFullYear();
    if(currentYear - birthYear < 18){
      alert("This job is for people who are over 18 only!");
      return false;
    }
  } else {
    alert("Please enter your birthdate!");
    return false;
  }

  if(!c1.checked && !c2.checked){
    alert("Choose your gender");
    return false;
  }

  if(ch4.selectedIndex === 0){
    alert("Choose where you are from");
    return false;
  }

  if(text === ""){
    alert("Le champ de description est vide !");
    return false;
  }

  if(!mail.includes("@") || !mail.includes(".")){
    alert("Enter a valid email!");
    return false;
  }

  if(!d1.checked && !d2.checked && !d3.checked){
    alert("Choose your speciality!");
    return false;
  }

  // ✅ Everything is valid
  alert("Your informations are saved, thank you!");
  return true;
}
