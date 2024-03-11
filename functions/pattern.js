var rows = 5;
for(let i = 0; i < rows; i++) {
    let row = "";
for(let j = 0; j < rows+1; j++) {
    if(i + j < rows - 1)
        row += "+ ";
    else
        row += "- ";
}
    console.log(row);
}