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
var getEmployes = function()
{
    var emplo =[];
    var id = 0;
    function loadEmployes()
    {
        var table = document.getElementById("employee");

        getJqueryAjax(function(result){
            var json_array = result;
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
                prepareTable(emp1.getEmpId(),emp1.getEmpName());
                id++;
            }
            console.log("Array of objects ");
            console.log(emplo);
            console.log(result);

        });
    }
    function prepareTable(value1,value2)
    {
        console.log(value1);
        var tr = jQuery('<tr>', {
            id: value1,
        }).on("click",function(){
            console.log(value1+"------");
           var empObject = getEmployeeDetails(this.id);
           displayDetails(empObject);
        }).append(
            jQuery('<td>',{
                html : value1
            }),
            jQuery('<td>',{
                html : value2
            })

        ).appendTo('#employee');
        console.log(tr);
    }

    function getEmployeeDetails(empid)
    {
            console.log("uuuuuuuu "+emplo.length);
            for(var i=0;i<emplo.length;i++)
            {
                var emp = emplo[i];
                var emp = emplo[i];
                if(emp.getEmpId() == empid)
                {
                    console.log("if ok");
                    return emp;
                }

            }
    }
    function displayDetails(emp)
    {
        jQuery("#employeeDetails").html("");

        jQuery("#employeeDetails").html(prepareHtml("Employee Id :",emp.getEmpId())) ;
        jQuery("#employeeDetails").append(prepareHtml("Employee Name :",emp.getEmpName()));
        jQuery("#employeeDetails").append(prepareHtml("Employee Type :",emp.getEmpType()));
        jQuery("#employeeDetails").append(prepareHtml("Employee Dob :",emp.getEmpDob()));
        jQuery("#employeeDetails").append(prepareHtml("Employee Experience :",emp.getEmpExp()));
        jQuery("#employeeDetails").append(prepareHtml("Employee Date of Joining :",emp.getEmpDoj()));

    }
    function prepareHtml(Label,value)
    {
          var htm= '<label>'+Label+'</label>&nbsp;<label>'+value+'</label><br>';
        return htm;
    }
    return{
        loadEmployes : loadEmployes,
        getEmployee : getEmployeeDetails,
        displayDetails : displayDetails

    }
}
function getJqueryAjax(callback)
{
    jQuery.ajax({url: "Employees.json", success: function(result){
        console.log(result);
        callback(result);
    }, failure : function(result){
        console.log("failure "+result);
    }});
}