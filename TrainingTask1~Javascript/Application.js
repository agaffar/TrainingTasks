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
    function getEmpId()
    {
        return empId;
    }
    function setEmpId(empid)
    {
        empId = empid;
    }
    function getEmpName()
    {
        return empName;
    }
    function setEmpName(empname)
    {
        empName = empname;
    }
    function getEmpType()
    {
        return type;
    }
    function setEmpType(typ)
    {
        type = typ;

    }
    function getEmpDob()
    {
        return dob;
    }
    function setEmpDob(dob1)
    {
        dob = dob1;
    }
    function getEmpExperience()
    {
        return experience;
    }
    function setEmpExperience(experiences)
    {
        experience = experiences;
    }
    function getEmpDateOfJoining()
    {
        return dateOfJoining;
    }
    function setEmpDateOfJoining(dateOfJoin)
    {
        dateOfJoining = dateOfJoin;
    }
    return{
        setEmpName : setEmpName,
        getEmpName : getEmpName,
        setEmpId : setEmpId,
        getEmpId : getEmpId,
        setEmpType : setEmpType,
        getEmpType : getEmpType,
        setEmpDob : setEmpDob,
        getEmpDob : getEmpDob,
        setEmpExp : setEmpExperience,
        getEmpExp : getEmpExperience,
        setEmpDoj : setEmpDateOfJoining,
        getEmpDoj : getEmpDateOfJoining
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
            var jsonArray = JSON.parse(response);
            console.log(jsonArray);
            var user = jsonArray.user;

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
        tr.setAttribute("onclick","getDetails(row"+  id+")");
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

            console.log("uuuuuuuu "+emplo.length);
            for(var i=0;i<emplo.length;i++)
            {
                var emp = emplo[i];
                var emp = emplo[i];
                //alert("Emplo iterating");

                if(emp.getEmpId() == empid.value)
                {
                    return emp;

                }

            }

    }
    function DisplayDetails(emp)
    {
        var empDetails = document.getElementById("employeeDetails");
        var empDetailsnew = document.createElement("div");
        empDetailsnew.id = "employeeDetails";

        prepareHtml("Employee Id :",emp.getEmpId(),empDetailsnew);
        prepareHtml("Employee Name :",emp.getEmpName(),empDetailsnew);
        prepareHtml("Employee Type :",emp.getEmpType(),empDetailsnew);
        prepareHtml("Employee Dob :",emp.getEmpDob(),empDetailsnew);
        prepareHtml("Employee Experience :",emp.getEmpExp(),empDetailsnew);
        prepareHtml("Employee Date of Joining :",emp.getEmpDoj(),empDetailsnew);
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
        loadEmployees : loadEmployees,
        getEmployee : getEmployeeDetails,
        DisplayDetails : DisplayDetails,
    }
}
function getJson(callback){
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'Employees.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}
