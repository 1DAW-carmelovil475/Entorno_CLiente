"use strict"

{
    let fecha = new Date ();
    console.log(fecha);
    let fecha2 = new Date ("1979/5/30 14:30:15");
    console.log(fecha2);

    let fecha3 = new Date (1979, 4, 30, 14, 30, 15);
    console.log(fecha3);

    let fecha4 = new Date (1979, 4, 30);
    console.log(fecha4);

    let fecha5 = new Date ("1979/05/30");
    console.log(fecha5);

    // GET METHODS
    let date = new Date ("2025/10/27 15:30:10:999");
    console.log(date);

    console.log(date.getDay()); // 1 = Monday
    console.log(date.getDate()); // 27
    console.log(date.getMonth()); // 9
    console.log(date.getFullYear()); // 2025
    console.log(date.getYear()); // 125 (Emòieza en 1900)
    console.log(date.getHours()); // 15
    console.log(date.getMinutes()); // 30
    console.log(date.getSeconds()); // 10 
    console.log(date.getMilliseconds()); // 999
    console.log(date.getTimezoneOffset()); // - 1h -60 minutos -60 porque te lo da en minutos
    console.log(date.getTime()) // 01/01/1970 en milisegundos


    // MÉTODOS SET

    date.setMonth(4);
    date.setDate(30);
    date.setFullYear(1979);
    date.setHours(14); // setHours (HH, MIN, SEG)
    date.setMinutes(30); 
    date.setSeconds(15);

    let d1 = date.toDateString();
    console.log(d1);
    let d2 = date.toLocaleDateString(); 
    console.log(d2);
   
    console.log(date.toUTCString());
    console.log(date.toGTCString());  
    
    

    


}