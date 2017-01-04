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
var getEmployes = function()
{
    var emplo =[];
    var id = 0;
    function loadEmployes()
    {
        var table = document.getElementById("employee");

        jQuery.ajax({url: "Employees.json", success: function(result){
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

        }, failure : function(result){
            console.log("failure "+result);

        }});



    }
    function prepareTable(value1,value2)
    {
        console.log(value1);
        var tr = jQuery('<tr>', {
            id: value1,
            /*onclick: function(){
                alert("iiiiiiiii");
                //console.log(value1+"------");
                //getEmployeeDetails(this.id);

            }*/
        }).on("click",function(){
            //alert("iiiiiiiii");
            console.log(value1+"------");
            getEmployeeDetails(this.id);

        }).append(
            jQuery('<td>',{
                html : value1
            }),
            jQuery('<td>',{
                html : value2
            })

        ).appendTo('#employee');
        console.log(tr);
        //$('#employee').append(tr);
        //table.appendChild(tr);
    }

    function getEmployeeDetails(empid)
    {
        //alert("here"+empid.value);
        var htm;

        //$('#employeeDetails').children().remove();
            console.log("uuuuuuuu "+emplo.length);
        jQuery("#employeeDetails").html("");
            for(var i=0;i<emplo.length;i++)
            {
                var emp = emplo[i];
                var emp = emplo[i];
                //alert("Emplo iterating");

                if(emp.getEmpId() == empid)
                {
                    console.log("if ok");
                    jQuery("#employeeDetails").html(prepareHtml("Employee Id :",emp.getEmpId())) ;
                    jQuery("#employeeDetails").append(prepareHtml("Employee Name :",emp.getEmpName()));
                    jQuery("#employeeDetails").append(prepareHtml("Employee Type :",emp.getEmpType()));
                    jQuery("#employeeDetails").append(prepareHtml("Employee Dob :",emp.getEmpDob()));
                    jQuery("#employeeDetails").append(prepareHtml("Employee Experience :",emp.getEmpExp()));
                    jQuery("#employeeDetails").append(prepareHtml("Employee Date of Joining :",emp.getEmpDoj()));
                    break;
                }

            }

            //var parentNode = empDetails.parentNode;
            //parentNode.replaceChild(empDetailsnew,empDetails);

    }
    function prepareHtml(Label,value)
    {
       /* var empDetails = $('<label>',{
            html : Label
        }).append(
            $('<label>',{
                html : value
            }),
            $('<br>')
        );*/
          var htm= '<label>'+Label+'</label>&nbsp;<label>'+value+'</label><br>';
        return htm;


    }
    return{
        "loadEmployes" : loadEmployes,
        "getEmployee" : getEmployeeDetails
    }
}
function getJqueryAjax()
{
    jQuery.ajax({url: "/Employees.json", success: function(result){
        console.log(result);
        return result;
    }, failure : function(result){
        console.log("failure "+result);
        return result;
    }});
}