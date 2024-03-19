// QUESTION NO 43
function show_magicians(magicians: string[]): void {

    for (const magician of magicians) {
      console.log(magician.charAt(0).toUpperCase()+ magician.slice(1));
      }
  }
  function make_great2(magicians: string []):  string[]{
    const greatMagicians: string[] =[];
       for (let i = 0; i < magicians.length; i++) {
           greatMagicians.push(magicians[i]    +   '  the Great');
        }
        return greatMagicians;
    }
     const magicians3: string[] = ["usman","haseeb","wajahat",];

     const greatMagicians2: string[] = make_great2(magicians3);
     show_magicians(magicians3);
     show_magicians(greatMagicians2);
     
     //Question no 44
     function sandwich(...items: string[]): void {
      console.log("sandwich order:")
  
      for(let i = 0; i < items.length; i++) {
          console.log(`- ${items[i]}`)
      }
  }
  
  console.log("enjoy your sandwich noor fatima")
  
  
  sandwich('capsicum','tomato', 'chicken')
  sandwich('beef','cheese')
  sandwich('garlic chicken','mayo sauce')
  // Question # 45

  type car = {
      manufacture: string
      model: string
      [key: string]: any;
  } 
  
  function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
      return{
          manufacture,
          model,
          ...optional
      }
  }
  const mycar: car = createCar("toyota", "corolla", { color:"silver", year: "2024"})
  console.log(mycar)
  