/**
 * Created by zhulonglong on 16/8/30.
 */

var express = require('express');
var app = express();

var asnyc = require('async');

app.get('/lesson2',function (req, res, next) {

   asnyc.concat(['file1,file2,file3'],f.state,function (err, results) {
       // NOW results has all file.states
   })

    asnyc.waterfall([function (first) {
        return 1;
    },function (second) {
        // now second is 1
        return 2;
    },function (three) {
        // now three is 2
        return 3;
    }],function (callback) {
        // now callback is 3
        // that is last callback
        // so easy
    })

    asnyc.parallel([function (task1) {
        // all the function is run together . you know .
    },function (task2) {

    },function (task3) {

    }
    ],function (err, results) {
        // the functions results
        // the order is add [] ,not the order which finished
        // haha
    });

    asnyc.series([function (task1) {
        // the functions run as this order. you know , this is series!!
    },function (task2) {

    },function (task3) {

    }],function (err, results) {

    });

    asnyc.filter([1,2,3,4,5,],function (file) {
        // file.access();
        return true;
    },function (err, results) {
        // results is has all the file exist!!
    })



});