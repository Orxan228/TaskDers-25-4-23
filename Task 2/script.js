var counter = 0;
$(".div").html(counter) 
$(".plus").on("click", function()
{
    counter++;
    $(".div").html(counter) 
    
})
$(".minus").on("click", function()
{
    counter--;
    $(".div").html(counter) 
})
$(".reset").on("click", function()
{
    counter=0;
    $(".div").html(counter) 
})