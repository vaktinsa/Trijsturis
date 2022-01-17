/*funkcija nolasa formā ievadītās vērtības un
 ja ievadīto malu garumi ir lieāki par 0,
 tad funkcija atgriež vērtības 'm1, m1, m3',
 pretējā gadījumā atgriež 'False'
*/
//let mala1;
//let mala2;
//let mala3;
function nolasa(){
    const malas = document.getElementsByClassName("mala");
    const m1 = parseFloat(mala1.value);
    const m2 = parseFloat(mala2.value);
    const m3 = parseFloat(mala3.value);
    if (m1 > 0 && m2 > 0 && m3 > 0){
        console.log({m1, m2, m3});
        return {m1, m2, m3}    
    } else {
        console.log(false);
        return false;
    }
}

function perimeter(m1, m2, m3){
    const m = nolasa();
    m1= m.m1; m2 = m.m2; m3 = m.m3;
    console.log(m1, m2, m3);
    const p = m1 + m2 + m3;
    console.log(p);
    return(p);
    // vajag atgriezt izrekinato perimetru
}
function area(m1, m2, m3){
    const m = nolasa();
    m1= m.m1; m2 = m.m2; m3 = m.m3;
    const pusper = perimeter(m1, m2, m3)/2;
    let laukums =Math.sqrt (pusper * (pusper - m1) * (pusper - m2) * (pusper -m3));
    console.log(laukums);
    return (laukums);
}
function irTrijsturis(m1, m2, m3) {
    if (m1 < m2 + m3 && m2 < m1 + m3 && m3 < m1 + m2) {
        return true;
    } else {
        return false;
    }
}
function rezultats() {
    const m = nolasa();
    m1 = m.m1; m2 = m.m2; m3 = m.m3;
    console.log(m1, m2, m3);
    if (!nolasa()) {
        t = "Malas nevar būt nulle vai mazākas";
    } else {
        if (irTrijsturis(m1, m2, m3) == false) {
            t = "Kļūda, neveidojas trijstūris."
        } else {
            t = "Dati " + m1 + ", " + m2 + ", " + m3 + " derīgi";
        }
        const p = perimetrs(m1, m2, m3);
        const s = Math.round(laukums(m1, m2, m3) * 100) / 100;
        t += " Perimetrs: " + p + "; laukums: " + s + ".";
    }
    console.log(t);
    return t;
}
function izvadaTekstu(){
    const teksts = rezultats();
    console.log(teksts);
    const sakne = document.getElementById("izvade");
    const raksti = document.createElement("p");
    raksti.innerHTML=teksts;
    sakne.appendChild(raksti);
}
