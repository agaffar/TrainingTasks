/**
 * Created by Lenovo on 1/3/2017.
 */
jQuery(document).ready(function(){
    //alert("hhhhhhhhhhhhhhhhh");
    window.emp = getEmployes();
    emp.loadEmployes();
});
function getDetails(input)
{
    window.emp.getEmployee(input);
}
/*
$("#employee tr").('click',function()
{
    //var rowId = $(this).attr('id');
    //console.log(rowId);
    //alert(event.target.id);
    alert('You clicked row '+ ($(this).index()+1) );
});
*/

