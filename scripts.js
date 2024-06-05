function getData(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const comment = document.getElementById("comment").value.trim();
    const maleRadio = document.getElementById("male");
    const femaleRadio = document.getElementById("female");

    if (!name || !comment || (!maleRadio.checked && !femaleRadio.checked)) {
        alert("All fields are compulsory");

        if (!name) {
            document.getElementById("name").focus();
        } else if (!comment) {
            document.getElementById("comment").focus();
        } else if (!maleRadio.checked && !femaleRadio.checked) {
            document.getElementById("gender").focus();
        }
        return;
    }
    const genderValue = maleRadio.checked ? maleRadio.value : femaleRadio.value;
    alert(genderValue, name, comment);
}
