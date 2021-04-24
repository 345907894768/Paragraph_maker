
pargraph_part_array = [];

function submit() {
 var inputs = [];

for(var i = 1 ; i <=6 ; i++)
{
    inputs.join(". ")
    document.getElementById("display_paragraph").innerHTML = inputs.join(". ");
    console.log(pargraph_part_array);
    pargraph_part_array.push(inputs);
}
   
var part1 = document.getElementById("sepa_1").value;
var part2 = document.getElementById("sepa_2").value;
var part3 = document.getElementById("sepa_3").value;
var part4 = document.getElementById("sepa_4").value;
var part5 = document.getElementById("sepa_5").value;
var part6 = document.getElementById("sepa_6").value;

pargraph_part_array.push(part1);
pargraph_part_array.push(part2);
pargraph_part_array.push(part3);
pargraph_part_array.push(part4);
pargraph_part_array.push(part5);
pargraph_part_array.push(part6);

console.log(pargraph_part_array);

document.getElementById("display_paragraph").innerHTML = pargraph_part_array;

var remove_comma = pargraph_part_array.join(" ");
console.log(remove_comma);
document.getElementById("display_paragraph").innerHTML = remove_comma;
}
