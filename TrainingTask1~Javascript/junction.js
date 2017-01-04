/**
 * Created by Lenovo on 1/3/2017.
 */

window.onload = function(){
    window.emp = getEmployees();
    emp.loadEmployees();
}
function getDetails(input)
{
    window.emp.getEmployee(input);
}
