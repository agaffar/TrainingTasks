/**
 * Created by Lenovo on 1/3/2017.
 */

window.onload = function(){
    window.emp = getEmployees();
    emp.loadEmployees();
}
function getDetails(input)
{
    var employeeObject = window.emp.getEmployee(input);
    window.emp.DisplayDetails(employeeObject);
}
