var mysql = require('mysql');
var express = require('express');
var path = require('path');
var stream = require('stream');
var util = require('util');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var jwt=require('jsonwebtoken');

var http = require('http');
var corsOptions = {
 origin: '*',
 optionsSuccessStatus: 200
};
app.use(bodyParser());
app.use(cors(corsOptions));


var con = mysql.createConnection({
 host: "localhost", 
 user: "root", 
 port: 3306,
 password: "root", 
 database: 'leadmanagement'
});

app.get('/getrole', function (request, response) {
    con.connect(function(err) {
    
    
    
    console.log("Connected!");
    sql='select * from leadmanagement.role'
    console.log(sql);

    con.query(sql, function (err1, result) {
    if (err1) throw err1;
    console.log("Result: "+result );

    response.end(JSON.stringify(result));
    });
    });
    
   });
   app.get('/getemployee', function (request, response) {
    con.connect(function(err) {
    
    
    
    console.log("Connected!");
    sql='select * from leadmanagement.employee'
    console.log(sql);

    con.query(sql, function (err1, result) {
    if (err1) throw err1;
    console.log("Result: "+result );
   //  const token =request.headers.entries[1].value[0];
   // //  console.log(token);
   //  const decode=jwt.verify()
   console.log(request);

    response.end(JSON.stringify(result));
    });
    });
    
   });
   app.post('/postemployee', function (request,response) {
    var reqObj = request.body;
  
    console.log(reqObj);
    console.log(JSON.stringify(reqObj));
    
    var msg =0;
    var status = 0;
   
   
   
    con.query('select * from leadmanagement.employee e where e.mobileNo=' + reqObj.mobileNo, function (err, rows, fields) { 
    
    if (err) throw err; 
    console.log('rows:'+rows);
    if (rows.length > 0) { 
    
    response.end(JSON.stringify({ status: status, msg: 'User Already Registered with this mobile No.!' }));
    
    } else { 
    var query = 'insert into leadmanagement.employee( employeeName,mobileNo,password,address,email,city,state,role,teamLead) values(\'' +reqObj.employeeName + '\',\'' + reqObj.mobileNo  + 
    '\',\'' + reqObj.password + '\',\'' + reqObj.address + '\',\'' + reqObj.email + '\',\'' + reqObj.city + '\',\'' + reqObj.state + '\',\'' + reqObj.role + '\',\'' + reqObj.teamLead + '\')';
    console.log('query:'+query);
    con.query(query, function (err, rows, fields) { 
    if (err) throw err; 
    msg = 'Register Successfully!'; 
    status = 1; 
    response.end(JSON.stringify({ status: status, msg: msg })); 
    }); 
    
    } 
    }); 
   });
    app.post('/postlead', function (request,response) {
    var reqObj = request.body;
    console.log(reqObj);
    console.log(JSON.stringify(reqObj));
    
    var msg =0;
    var status = 0;
    var tDate = new Date();
 var formattedDate = ''+tDate.getFullYear() + '-' + tDate.getMonth() + '-' + tDate.getDate();
   
   
   
    con.query('select * from leadmanagement.leads l where l.mobileNo=' + reqObj.mobileNo, function (err, rows, fields) { 
    
    if (err) throw err; 
    console.log('rows:'+rows);
    if (rows.length > 0) { 
    
    response.end(JSON.stringify({ status: status, msg: 'User Already Registered with this mobile No.!' }));
    
    } else { 
    var query = 'insert into leadmanagement.leads( employeeId,leadRefrence,date,name,mobileNo,alternateMobileNo,email,address,city,state,interestedIn) values(\'' + reqObj.employeeId + '\',\'' + reqObj.leadRefrence  + 
    '\',\'' + formattedDate + '\',\'' + reqObj.name + '\',\'' + reqObj.mobileNo + '\',\'' + reqObj.alternateMobileNo + '\',\'' + reqObj.email + '\',\'' + reqObj.address + '\',\'' +  reqObj.city + '\',\'' +  reqObj.state + '\',\'' +  reqObj.interestedIn + '\')';
    console.log('query:'+query);
    con.query(query, function (err, rows, fields) { 
    if (err) throw err; 
    msg = 'Register Successfully!'; 
    status = 1; 
    response.end(JSON.stringify({ status: status, msg: msg })); 
    }); 
    
    } 
    }); 
   });
   app.post('/postrole', function (request,response) {
      var reqObj = request.body;
      console.log(reqObj);
      console.log(JSON.stringify(reqObj));
      
      var msg =0;
      var status = 0;
    
      con.query('select * from leadmanagement.role r where r.role=\'' + reqObj.role + '\'', function (err, rows, fields) { 
    
         if (err) throw err; 
         console.log('rows:'+rows);
         if (rows.length > 0) { 
         
         response.end(JSON.stringify({ status: status, msg: ' Already Present this Role!' }));
         
         } else { 
   
     
     
     
      var query = 'insert into leadmanagement.role( role ) value(\'' + reqObj.role + '\')';
      console.log('query:'+query);
      con.query(query, function (err, rows, fields) {
      if (err) throw err; 
      msg = 'Register Successfully!'; 
      status = 1; 
      response.end(JSON.stringify({ status: status, msg: msg })); 
   }); 
    
} 
}); 
});
app.post('/postproduct', function (request,response) {
   var reqObj = request.body;
   console.log(reqObj);
   console.log(JSON.stringify(reqObj));
   var tokens=request.header;
   console.log(JSON.stringify(tokens));

   
   var msg =0;
   var status = 0;
 
   con.query('select * from leadmanagement.product r where r.productName=\'' + reqObj.productName + '\'', function (err, rows, fields) { 
 
      if (err) throw err; 
      console.log('rows:'+rows);
      if (rows.length > 0) { 
      
      response.end(JSON.stringify({ status: status, msg: ' Already Present this Role!' }));
      
      } else { 

  
  
  
   var query = 'insert into leadmanagement.product( productName,productDescription ) value(\'' + reqObj.productName + '\' ,\'' + reqObj.productDescription + '\')';
   console.log('query:'+query);
   con.query(query, function (err, rows, fields) {
   if (err) throw err; 
   msg = 'Register Successfully!'; 
   status = 1; 
   response.end(JSON.stringify({ status: status, msg: msg })); 
}); 
    
} 
}); 
});
app.get('/getLeadsDetails', function (request, response) {
   con.connect(function(err) {
   
   
   
   console.log("Connected!");
   sql='select * from leadmanagement.leads'
   console.log(sql);

   con.query(sql, function (err1, result) {
   if (err1) throw err1;
   console.log(JSON.stringify(result) );
  
  console.log(result.Date)

   response.end(JSON.stringify(result));
   });
   });
   
  });
  app.get('/getLeadsDetail', function (request, response) {
   con.connect(function(err) {
      console.log("Id:" + request.query.id);
   
   
   
   console.log("Connected!");
   sql='select * from leadmanagement.leads where id='+ request.query.id;
   console.log(sql);

   con.query(sql, function (err1, result) {
   if (err1) throw err1;
   console.log(JSON.stringify(result) );
  
  console.log(result.Date)

   response.end(JSON.stringify(result));
   });
   });
   
  });
  app.get('/productDetails', function (request, response) {
   con.connect(function(err) {
   
   
   
   console.log("Connected!");
   sql='select * from leadmanagement.product'
   console.log(sql);

   con.query(sql, function (err1, result) {
   if (err1) throw err1;
   console.log(JSON.stringify(result) );
  
  console.log(result.Date)

   response.end(JSON.stringify(result));
   });
   });
   
  });
  app.post('/postfollowUp', function (request,response) {
   var reqObj = request.body;
   console.log(reqObj);
   console.log(JSON.stringify(reqObj));
   
   var msg =0;
   var status = 0;
 
   con.query('select * from leadmanagement.followup f where f.leadId=\'' + reqObj.leadId + '\'', function (err, rows, fields) { 
 
      if (err) throw err; 
      console.log('rows:'+rows);
      if (rows.length > 0) { 
      
      response.end(JSON.stringify({ status: status, msg: ' Already Present this followUp!' }));
      
      } else { 

  
  
  
   var query = 'insert into leadmanagement.followup( leadId,employeeId,leadRefrence,date,name,mobileNo,alternateMobileNo,email,address,city,state,interestedIn,contactType,discussionDetails,output,nextFollowDate,reason,customerNo ,product) values(\'' + reqObj.leadId + '\' ,\'' + reqObj.employeeId + '\',\'' + reqObj.leadRefrence + '\',\'' + reqObj.date + '\',\'' + reqObj.name + '\',\'' + reqObj.mobileNo + '\',\'' + reqObj.alternateMobileNo + '\',\'' + reqObj.email + '\',\'' + reqObj.address + '\',\'' + reqObj.city + '\',\'' + reqObj.state + '\',\'' + reqObj.interestedIn + '\',\'' + reqObj.contactType + '\',\'' + reqObj.discussionDetail + '\',\'' + reqObj.output + '\',\'' + reqObj.nextFollowDate + '\',\'' + reqObj.reason + '\',\'' + reqObj.custmorNo + '\',\'' + reqObj.product + '\')';
   console.log('query:'+query);
   con.query(query, function (err, rows, fields) {
   if (err) throw err; 
   msg = 'Register Successfully!'; 
   status = 1; 
   response.end(JSON.stringify({ status: status, msg: msg })); 
}); 
    
} 
}); 
});
app.post('/login', function (request,response) {
   var reqObj = request.body;
   // console.log(request);
   // console.log("this is request"+response);
   console.log(reqObj);
   console.log(JSON.stringify(reqObj));
   const token= jwt.sign(
      {
         mobileNo: reqObj.mobileNo
      },
      'secret',
      {
         expiresIn: "1h"
      }
   )
   console.log(token);
   
   var msg =0;
   var status = 0;
   var sql='select * from leadmanagement.employee e where e.mobileNo =\'' + reqObj.mobileNo + '\' AND e.password =\'' + reqObj.password + '\'';
 console.log(sql)
   con.query( sql, function (err, rows, fields) { 
 
      if (err) throw err; 
      console.log('rows:'+rows);
      if (rows.length > 0) { 
         msg = 'Register Successfully!'; 
         status = 1; 
         response.end(JSON.stringify({ status: status, msg: msg ,rows:rows[0].employeeId,token:token})); 
     
      } else { 
         status=0;
           response.end(JSON.stringify({ status: status, msg: ' Not login!' }));
  
         
} 
}); 
});
     

app.listen(3300, function () {
    console.log('listening port 3300');
   });
