function Create(str)
{
    var getRequest;
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCustomers";
    
    if (str == "")
    {
        document.getElementById("info").innerHTML = "";
        return;
    }
    
    if (window.XMLHttpRequest)
    {
        getRequest = new XMLHttpRequest;
    }
    
    getRequest.onreadystatechange = function()
    
    {
        if (getRequest.readyState == 4 && getRequest.status == 200)
        {
            var output = JSON.parse(getRequest.responseText);
            Generate(output);
        }
    }
    getRequest.open("GET", url, true);
    getRequest.send();
}
function Generate(result)
{
    var count = 0;
    var display = "";
    
        display += ("<center>" + "<table border = '2' style = 'color: blue;'>");
        
        display += ('<th>' + 'Customer ID' + '<th>' + 'Company Name' + '<th>' + 'City' + '<th>');
        
          for (count = 0; count < result.GetAllCustomersResult.length; count++)
            {
                   display += "<tr>";
                        display += "<td>" + result.GetAllCustomersResult[count].CustomerID + "</td>";
                        display += "<td>" + result.GetAllCustomersResult[count].CompanyName + "</td>";
                        display += "<td>" + result.GetAllCustomersResult[count].City + "</td>";
                        
                   display += "</tr>";
                   
                   
                   
            }
            
             
              document.getElementById("dataa").innerHTML = display;
}
        
        
        
        
        













function GetHistory()
{
    var objRequest = new XMLHttpRequest();  //Create AJAX request object
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
    url += document.getElementById("custid").value;
    
        objRequest.onreadystatechange = function()
        {
            if (objRequest.readyState == 4 && objRequest.status == 200)
         
            {
            var output = JSON.parse(objRequest.responseText);          
            
            GenerateOutput(output);
            
            }
        }
                 objRequest.open("GET", url, true);
                 objRequest.send();
}

function GenerateOutput(result)
    {
        var count = 0;
        var displaytext = "";
        displaytext += ("<center>" + "<table border = '2' style = 'color: blue;'>");
        
        displaytext += ('<th>' + 'Product Name' + '<th>' + 'Total' + '<th>');
        
          for (count = 0; count <  result.length; count++)
            {
                   displaytext += "<tr>";
                        displaytext += "<td>" + result[count].ProductName + "</td>";
                        displaytext += "<td>" + result[count].Total + "</td>";
                        
                    displaytext += "</tr>";
                   
                   
                   
            }
            
             
              document.getElementById("table").innerHTML = displaytext;
    }
    
    
    







function GetOrders()
{
    var objRequest = new XMLHttpRequest();  //Create AJAX request object
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
    url += document.getElementById("cusid").value;
    
        objRequest.onreadystatechange = function()
        {
            if (objRequest.readyState == 4 && objRequest.status == 200)
         
            {
            var output = JSON.parse(objRequest.responseText);          
            
            GeneratOutput(output);
            
            }
        }
                 objRequest.open("GET", url, true);
                 objRequest.send();
}

function GeneratOutput(result)
    {
        var count = 0;
        var displaytext = "";
        displaytext += ("<center>" + "<table border = '2' style = 'color: blue;'>");
        
        displaytext += ('<th>' + 'Order Date' + '<th>' + 'Order ID' + '<th>' + 'Ship Address' + '<th>' + 'Ship City' + '<th>' + 'Ship Name' + '<th>' + 'ShipPostcode' + '<th>' + 'Shipped Date' + '<th>');
          for (count = 0; count <   result.GetOrdersForCustomerResult.length; count++)
            {
                   displaytext += "<tr>";
                        displaytext += "<td width='30' align='center'>" + result.GetOrdersForCustomerResult[count].OrderDate + "</td>";
                        displaytext += "<td width='30' align='center'>" + result.GetOrdersForCustomerResult[count].OrderID + "</td>";
                        displaytext += "<td width='30' align='center'>" + result.GetOrdersForCustomerResult[count].ShipAddress + "</td>";
                        displaytext += "<td width='30' align='center'>" + result.GetOrdersForCustomerResult[count].ShipCity + "</td>";
                        displaytext += "<td width='30' align='center'>" + result.GetOrdersForCustomerResult[count].ShipName + "</td>";
                        displaytext += "<td width='30' align='center'>" + result.GetOrdersForCustomerResult[count].ShipPostcode + "</td>";
                        displaytext += "<td width='30' align='center'>" + result.GetOrdersForCustomerResult[count].ShippedDate + "</td>";
                        
                    displaytext += "</tr>";
                
                   
            }
            
              document.getElementById("orderdispla").innerHTML = displaytext;
    }
    
function MenuChoice()
{
    if (document.getElementById("menu").value == "Customer List")
    {   
        document.getElementById("section1").style.display = "inline";
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.display = "none";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.display = "none";
        document.getElementById("section3").style.visibility = "hidden";
    }
    
    else if (document.getElementById("menu").value == "Order History")
    {
        document.getElementById("section1").style.display = "none";
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.display = "inline";
        document.getElementById("section2").style.visibility = "visible";
        document.getElementById("section3").style.display = "none";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Orders Placed")
    {
        document.getElementById("section1").style.display = "none";
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.display = "none";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.display = "inline";
        document.getElementById("section3").style.visibility = "visible";
    }
    else
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
}