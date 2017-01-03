/**
 * Created by Lenovo on 1/3/2017.
 */
var Employee = function() {
    var empId;
    var empName;
    var type;
    var dob;
    var experience;
    var dateOfJoining;
    function get_emp_id()
    {
        return empId;
    }
    function set_emp_id(empid)
    {
        empId = empid;
    }
    function get_emp_name()
    {
        return empName;
    }
    function set_emp_name(empname)
    {
        empName = empname;
    }
    function get_emp_type()
    {
        return type;
    }
    function set_emp_type(typ)
    {
        type = typ;

    }
    function get_emp_dob()
    {
        return dob;
    }
    function set_emp_dob(dob1)
    {
        dob = dob1;
    }
    function get_emp_experience()
    {
        return experience;
    }
    function set_emp_experience(experiences)
    {
        experience = experiences;
    }
    function get_emp_date_of_joining()
    {
        return dateOfJoining;
    }
    function set_emp_date_of_joining(date_of_join)
    {
        dateOfJoining = date_of_join;
    }
    return{
        "setEmpName" : set_emp_name,
        "getEmpName" : get_emp_name,
        "setEmpId" : set_emp_id,
        "getEmpId" : get_emp_id,
        "setEmpType" : set_emp_type,
        "getEmpType" : get_emp_type,
        "setEmpDob" : set_emp_dob,
        "getEmpDob" : get_emp_dob,
        "setEmpExp" : set_emp_experience,
        "getEmpExp" : get_emp_experience,
        "setEmpDoj" : set_emp_date_of_joining,
        "getEmpDoj" : get_emp_date_of_joining

    }

}
var getEmployees = function()
{
    var emplo =[];
    var id = 0;
    function loadEmployees()
    {
        var table = document.getElementById("employee");

        getJson(function(response)
        {
            var json_array = JSON.parse(response);
            console.log(json_array);
            var user = json_array.user;

            for(var i=0;i<user.length;i++)
            {
                var emp1 = new Employee();
                var employee = user[i];

                emp1.setEmpName(employee.emp_name);
                emp1.setEmpId(employee.emp_id);
                emp1.setEmpType(employee.type);
                //console.log(employee.emp_name+" && "+emp1.getEmpType());
                emp1.setEmpDob(employee.dob);
                emp1.setEmpExp(employee.experience);
                emp1.setEmpDoj(employee.date_of_joining);
                emplo.push(emp1);
                prepareTable(table,emp1.getEmpId(),emp1.getEmpName());
                id++;
            }
            console.log("Array of objects ");
            console.log(emplo);
           /* for(var i=0;i<Emplo.length;i++)
            {
                var emp = Emplo[i];
                var tr =  document.createElement("tr");
                var td1 = document.createElement("td");
                var td2 = document.createElement("td");
                var input1 = document.createElement("Input");
                input1.setAttribute("value",emp.getEmpId());
                input1.setAttribute("type","text");
                input1.setAttribute("onclick","getDetails(this)");

                td1.appendChild(input1);
                var input2 = document.createElement("Input");
                input2.setAttribute("value",emp.getEmpName());
                input2.setAttribute("type","text");
                td2.appendChild(input2);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);

            }*/

        });
    }
    function prepareTable(table,value1,value2)
    {
        var tr =  document.createElement("tr");
        tr.setAttribute("onclick","getDetails(row"+id+")");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var input1 = document.createElement("Input");
        input1.setAttribute("value",value1);
        input1.setAttribute("id","row"+id);

        input1.setAttribute("type","text");
        input1.setAttribute("onclick","getDetails(this)");

        td1.appendChild(input1);
        var input2 = document.createElement("Input");
        input2.setAttribute("value",value2);
        input2.setAttribute("type","text");
        td2.appendChild(input2);
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    }
    function getEmployeeDetails(empid)
    {
        //alert("here"+empid.value);

            var empDetails = document.getElementById("employeeDetails");
            var empDetailsnew = document.createElement("div");
            empDetailsnew.id = "employeeDetails";
            console.log("uuuuuuuu "+emplo.length);
            for(var i=0;i<emplo.length;i++)
            {
                var emp = emplo[i];
                var emp = emplo[i];
                //alert("Emplo iterating");

                if(emp.getEmpId() == empid.value)
                {
                   /* var Lab1 = document.createElement("label");
                    Lab1.innerHTML = "Employee Id : ";
                    var EmpId = document.createElement("label");
                    EmpId.innerHTML = emp.getEmpId();
                    var bre = document.createElement("br");
                    empDetailsnew.appendChild(Lab1);
                    empDetailsnew.appendChild(EmpId);
                    empDetailsnew.appendChild(document.createElement("br"));

                    var lab2 = document.createElement("label");
                    lab2.innerHTML = "Employee Name : ";
                    var EmpName = document.createElement("label");
                    EmpName.innerHTML = emp.getEmpName();
                    empDetailsnew.appendChild(lab2);
                    empDetailsnew.appendChild(EmpName);
                    empDetailsnew.appendChild(document.createElement("br"));

                    var lab3 = document.createElement("label");
                    lab3.innerHTML = "Employee Type : ";
                    var EmpType = document.createElement("label");
                    EmpType.innerHTML = emp.getEmpType();
                    empDetailsnew.appendChild(lab3);
                    empDetailsnew.appendChild(EmpType);
                    empDetailsnew.appendChild(document.createElement("br"));

                    var lab4 = document.createElement("label");
                    lab4.innerHTML = "Employee Dob : ";
                    var EmpDob = document.createElement("label");
                    EmpDob.innerHTML = emp.getEmpDob();
                    empDetailsnew.appendChild(lab4);
                    empDetailsnew.appendChild(EmpDob);
                    empDetailsnew.appendChild(document.createElement("br"));

                    var lab5 = document.createElement("label");
                    lab5.innerHTML = "Employee Experience : ";
                    var EmpExp = document.createElement("label");
                    EmpExp.innerHTML = emp.getEmpExp();
                    empDetailsnew.appendChild(lab5);
                    empDetailsnew.appendChild(EmpExp);
                    empDetailsnew.appendChild(document.createElement("br"));

                    var lab6 = document.createElement("label");
                    lab6.innerHTML = "Employee Date of Joining : ";
                    var EmpDoj = document.createElement("label");
                    EmpDoj.innerHTML = emp.getEmpDoj();
                    empDetailsnew.appendChild(lab6);
                    empDetailsnew.appendChild(EmpDoj);
                    empDetailsnew.appendChild(document.createElement("br"));*/
                    prepareHtml("Employee Id :",emp.getEmpId(),empDetailsnew);
                    prepareHtml("Employee Name :",emp.getEmpName(),empDetailsnew);
                    prepareHtml("Employee Type :",emp.getEmpType(),empDetailsnew);
                    prepareHtml("Employee Dob :",emp.getEmpDob(),empDetailsnew);
                    prepareHtml("Employee Experience :",emp.getEmpExp(),empDetailsnew);
                    prepareHtml("Employee Date of Joining :",emp.getEmpDoj(),empDetailsnew);
                    break;
                }

            }
            var parentNode = empDetails.parentNode;
            parentNode.replaceChild(empDetailsnew,empDetails);

    }
    function prepareHtml(Label,value,empDetailsnew)
    {
        var Lab1 = document.createElement("label");
        Lab1.innerHTML = Label;
        var EmpId = document.createElement("label");
        EmpId.innerHTML = value;
        var bre = document.createElement("br");
        empDetailsnew.appendChild(Lab1);
        empDetailsnew.appendChild(EmpId);
        empDetailsnew.appendChild(document.createElement("br"));

    }
    return{
        "loadEmployees" : loadEmployees,
        "getEmployee" : getEmployeeDetails
    }
}
function getJson(callback){
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'Employees.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}
