const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");




function btnEncriptar(){
    
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
        
    

}





function encriptar(stringEncriptada){
    let matrizCodigo = [
        ["a","W9o2"],
        ["b","D9x7"],
        ["c","N1g9"],
        ["d","B1j5"],
        ["e","D3v9"],
        ["f","M1d8"],
        ["g","Z6o9"],
        ["h","B4f3"],
        ["i","S1a4"],
        ["j","U2x5"],
        ["k","I5p0"],
        ["l","Y8k7"],
        ["m","Y5p4"],
        ["n","L0l8"],
        ["ñ","O4g3"],
        ["o","B6a3"],
        ["p","S7j2"],
        ["q","D3a3"],
        ["r","Y0w1"],
        ["s","G3x3"],
        ["t","C2x4"],
        ["u","W4c0"],
        ["v","Z8c1"],
        ["w","D0e2"],
        ["x","X9g6"],
        ["y","N2a7"],
        ["z","M8o8"],
        ["A","U6q7"],
        ["B","T4s6"],
        ["C","J6a6"],
        ["D","D4u4"],
        ["E","L3o7"],
        ["F","A5x9"],
        ["G","N2s0"],
        ["H","S1h7"],
        ["I","S0y5"],
        ["J","L5d4"],
        ["K","O2f8"],
        ["L","M2m9"],
        ["M","L8l1"],
        ["N","V8d9"],
        ["Ñ","P7m3"],
        ["O","O3p0"],
        ["P","E6y7"],
        ["Q","B9n4"],
        ["R","D9e5"],
        ["S","G4x6"],
        ["T","J8t2"],
        ["U","U9n0"],
        ["V","A4a2"],
        ["W","L4o2"],
        ["X","T3r2"],
        ["Y","P6s5"],
        ["Z","D2z0"],
        ["1","N2x8"],
        ["2","N9i0"],
        ["3","P1j1"],
        ["4","Z1l1"],
        ["5","M3h3"],
        ["6","E3j1"],
        ["7","O1q6"],
        ["8","I3o5"],
        ["9","Y2j5"],
        ["0","X3j5"],
        [" ","B4w9"]        
    ];
    

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}



function desencriptar(stringDesencriptada){
    let matrizCodigo = [
        ["a","W9o2"],
        ["b","D9x7"],
        ["c","N1g9"],
        ["d","B1j5"],
        ["e","D3v9"],
        ["f","M1d8"],
        ["g","Z6o9"],
        ["h","B4f3"],
        ["i","S1a4"],
        ["j","U2x5"],
        ["k","I5p0"],
        ["l","Y8k7"],
        ["m","Y5p4"],
        ["n","L0l8"],
        ["ñ","O4g3"],
        ["o","B6a3"],
        ["p","S7j2"],
        ["q","D3a3"],
        ["r","Y0w1"],
        ["s","G3x3"],
        ["t","C2x4"],
        ["u","W4c0"],
        ["v","Z8c1"],
        ["w","D0e2"],
        ["x","X9g6"],
        ["y","N2a7"],
        ["z","M8o8"],
        ["A","U6q7"],
        ["B","T4s6"],
        ["C","J6a6"],
        ["D","D4u4"],
        ["E","L3o7"],
        ["F","A5x9"],
        ["G","N2s0"],
        ["H","S1h7"],
        ["I","S0y5"],
        ["J","L5d4"],
        ["K","O2f8"],
        ["L","M2m9"],
        ["M","L8l1"],
        ["N","V8d9"],
        ["Ñ","P7m3"],
        ["O","O3p0"],
        ["P","E6y7"],
        ["Q","B9n4"],
        ["R","D9e5"],
        ["S","G4x6"],
        ["T","J8t2"],
        ["U","U9n0"],
        ["V","A4a2"],
        ["W","L4o2"],
        ["X","T3r2"],
        ["Y","P6s5"],
        ["Z","D2z0"],
        ["1","N2x8"],
        ["2","N9i0"],
        ["3","P1j1"],
        ["4","Z1l1"],
        ["5","M3h3"],
        ["6","E3j1"],
        ["7","O1q6"],
        ["8","I3o5"],
        ["9","Y2j5"],
        ["0","X3j5"],
        [" ","B4w9"]    
    ];

   

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}

function btnDesencriptar(){
    
    for(let i=0;i<15;i++){
        mensaje.select();
        navigator.clipboard.writeText(mensaje.value);
        textArea.value=mensaje.value;
        mensaje.value = "";
        const textoEncriptado = desencriptar(textArea.value)
        mensaje.value = textoEncriptado
        textArea.value = textoEncriptado;
    }
    
   
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
    
}



