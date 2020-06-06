function requiredField()
{
    if (document.getElementById("field").value.length === 0)
        {
            alert("Please fill up all the fields");
            return false;
        }
    if (document.getElementById("field2").value.length === 0)
        {
            alert("Please fill up all the fields");
            return false;
        }
    if (document.getElementById("field3").value.length === 0)
        {
            alert("Please fill up all the fields");
            return false;
        }
    if (document.getElementById("field4").value.length === 0)
        {
            alert("Please fill up all the fields");
            return false;
        }
}