var Common = {
    GetData: function(webApiRequest, actionMethodType, postData, successCallback, failureCallback, isAsync){		
	var jwt_tk = localStorage.getItem("jwt_tk");
	$.ajax({
        url : webApiRequest,
        method: 'GET',
		headers : {'HTTP_AUTHORIZATION' : "JWT " + jwt_tk},
		dataType: 'json',
        success : successCallback,
		error:failureCallback
		})	
	},
	
	PostData: function(webApiRequest, actionMethodType, postData, successCallback, failureCallback, isAsync){		
		/*$.post(webApiRequest, postData, successCallback )
		 .error(function(jqXHR, textStatus, errorThrown){ */ /* assign handler */
			/*failureCallback(Message);
			
        });	*/
        var jwt_tk = localStorage.getItem("jwt_tk");
    	$.ajax({
            url : webApiRequest,
            method: 'POST',
            headers : {'HTTP_AUTHORIZATION' : "JWT " + jwt_tk},
            data:postData,
            dataType: 'json',
            success : successCallback,
            error:failureCallback
		})	
	},
	
	GetServerData: function (webApiRequest, actionMethodType, postData, successCallback, failureCallback, isAsync) {
        var tempdata = null;
        if (postData != null)
            tempdata = JSON.stringify(postData);

        if (isAsync == null)
            isAsync = true;

        return $.ajax({
            url: webApiRequest, 
            type: actionMethodType.toUpperCase(),
            async: isAsync,
            contentType: "application/json; charset=utf-8",
            data: tempdata,
            cache: false,
            //headers: {
            //    "UserId": _user.UserId,
            //},
            //beforeSend: function() {
            //    $("#ajax-loading").show();
            //},
            success: function (data) {
                if (data == "_RedirectToLogin_") {
                    window.location.href = "/eSDM/Login";
                    //$('#ajax-loading').hide();
                }
                else if (successCallback) {
                    successCallback(data);
                    //$('#ajax-loading').hide();
                }
            },
            error: function (jqXhr, error, errorThrown) {
                //$('#ajax-loading').hide();
                if (jqXhr.status === 303) {
                    window.location.href = "/eSDM/";
                }
                if (jqXhr.status === 404) {
                    alert("Request Failed: Internal Server Error");
                }
                else {
                    var err = jQuery.parseJSON(jqXhr.responseText);
                    if (failureCallback)
                        failureCallback(err.Message);
                    else
                        alert("Request Failed: " + err.Message);
                }
            },
            //complete: function() {
            //    $("#ajax-loading").hide();
            //}
        });
    },

    UploadFile: function (webApiRequest, postData, successCallback, failureCallback, isAsync) {
        var tempdata = {};

        if (postData != null)
            tempdata = postData;

        if (isAsync == null)
            isAsync = true;

        $.ajax({
            url: webApiRequest,
            type: 'POST',
            processData: false,
            contentType: false,
            data: tempdata,
            cache: false,
            headers: {
                //"UserId": _user.UserId,
            },
            beforeSend: function () {
                $("#ajax-loading").show();
            },
            success: function (data) {
                if (successCallback) {
                    successCallback(data);
                }
                //$('#ajax-loading').hide();
            },
            error: function (jqXhr, error, errorThrown) {
                //$("#ajax-loading").hide();
                if (jqXhr.status == 303) {
                    window.location.href = "/eSDM/";
                }
                if (jqXhr.status == 404) {
                    alert("Request Failed: Internal Server Error");
                }
                else {
                    var err = jQuery.parseJSON(jqXhr.responseText);
                    if (failureCallback)
                        failureCallback(err.Message);
                    else
                        alert("Request Failed: " + err.Message);
                }
            },
            complete: function() {
                $("#ajax-loading").hide();
            }
        });
    },

    LoadHTMLPage: function (uri, successCallback, failureCallback, isAsync) {
        if (isAsync == null)
            isAsync = true;

        $.ajax({
            url: uri,
            dataType: "html",
            async: isAsync,
            cache: false,
            //beforeSend: function () {
            //    $("#ajax-loading").show();
            //},
            success: function (htmlResponse) {
                if (successCallback) {
                    successCallback(htmlResponse);
                    //$("#ajax-loading").hide();
                }
            },
            error: function (jqXhr, error, errorThrown) {
                //$("#ajax-loading").hide();
                if (jqXhr.status === 303) {
                    window.location.href = "/eSDM/";
                }
                else {
                    var err = jQuery.parseJSON(jqXhr.responseText);
                    if (failureCallback)
                        failureCallback(err.Message);
                    else
                        alert("Request Failed: " + err.Message);
                }
            },
            //complete: function () {
            //    $("#ajax-loading").hide();
            //}
            //statusCode: {
            //    303: function() {
            //        window.location.href = "/eSDM/";
            //    },
            //    404:function(){
            //        alert("Request Failed: Internal Server Error");
            //    }
            //}
        });
    },

    GetErrorMessagesText: function (errorMessages) {
        var li = "";
        $.each(errorMessages, function (i) {
            li += "<li>" + errorMessages[i] + "</li>";
        });

        return "<ul>" + li + "</li>";
    },

	FormatCurrency: function(value)
	{
		value=value.toString();
		var afterPoint = '';
		if(value.indexOf('.') > 0)
		   afterPoint = value.substring(value.indexOf('.'),value.length);
		value = Math.floor(value);
		value=value.toString();
		var lastThree = value.substring(value.length-3);
		var otherNumbers = value.substring(0,value.length-3);
		if(otherNumbers != '')
			lastThree = ',' + lastThree;
		var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;

		return'<i class="icon-inr"></i>' + res ;

	},
	
	FormatCurrencyByComma: function(value)
	{
		value=value.toString();
		var afterPoint = '';
		if(value.indexOf('.') > 0)
		   afterPoint = value.substring(value.indexOf('.'),value.length);
		value = Math.floor(value);
		value=value.toString();
		var lastThree = value.substring(value.length-3);
		var otherNumbers = value.substring(0,value.length-3);
		if(otherNumbers != '')
			lastThree = ',' + lastThree;
		var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
		return res ;
	},
	
    SortSelectOptions: function (controlId) {
        var options = $(controlId + " option");
        var selected = $(controlId).val();
        options.sort(function (a, b) {
            if (a.text > b.text)
                return 1;
            else if (a.text < b.text)
                return -1;
            else
                return 0;
        });

        $(controlId).empty().append(options);
        $(controlId).val(selected);
    },

    GenerateGUID: function () {
        var d = new Date().getTime();
        var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    },

    GetColumnHeader: function(row) {
        var theaderStart = "<thead><tr>";
        var theaderEnd = "</tr></thead>";
        var headColumn = "";

        for (var key in row) {
            if (row.hasOwnProperty(key)) {
                headColumn += "<th>" + key + "</th>";
            }
        }
        return theaderStart + headColumn + theaderEnd;
    },

    GroupBy: function (data, columnName) {
        var groupedData;
        data.reduce(function (result, current) {
            var currentVal = current[columnName];

            result[currentVal] = result[currentVal] || [];
            result[currentVal].push(current);
            groupedData = result;
        }, {});

        return groupedData;
    },

    FormatDate: function (date) {
        return moment(date).format("DD-MM-YYYY");
    },
	
	
	ConvertTODBDateFormat: function (dateVal) {
        return moment(dateVal, "DD/MM/YYYY").format("MM/DD/YYYY");
    },


    FormatDateTime: function (date) {
        return moment(date).format("DD-MM-YYYY HH:mm");
    },
	
	GetDecimals: function(number) {	  
	   if(number % 1 == 0){
			return number+".00";
		}else{	   
			return parseFloat(number).toFixed(2);
		}
   },

    GetDateFormat: function (date) {
        return "DD/MM/YYYY";
    },
    GetDateFormatYearwise: function (dateVal) {
        return moment(dateVal).format("YYYY-MM-DD");
    },

    ConvertTODateFormat: function (dateVal) {
        return moment(dateVal, "DD-MM-YYYY").format("YYYY-MM-DD");
    },

    MailFormatDate: function (dateVal) {
		var d = new Date(dateVal);
		var dayName = d.toString().split(' ')[0];
		var dayday = d.toString().split(' ')[2];
		var dayMonth = d.toString().split(' ')[1];
		var dayYear = d.toString().split(' ')[3];

		var hours = d.getHours(); 
		var minutes = d.getMinutes(); 
		// Check whether AM or PM 
		var newformat = hours >= 12 ? 'PM' : 'AM';  
		// Find current hour in AM-PM Format 
		hours = hours % 12;  
		// To display "0" as "12" 
		hours = hours ? hours : 12;  
		minutes = minutes < 10 ? '0' + minutes : minutes; 
		console.log(hours + ':' + minutes + ' ' + newformat )
		var group_date_time = dayName+", "+dayMonth +" "+dayday +", "+ dayYear +" " +hours + ':' + minutes + ' ' + newformat;
        return group_date_time;
    },

    ChatBoxFormatComment: function (dateVal) {
		var d = new Date(dateVal);
		var new_d = new Date();
		var dayName = d.toString().split(' ')[0];
		var dayday = d.toString().split(' ')[2];
		var dayMonth = d.toString().split(' ')[1];
		var dayYear = d.toString().split(' ')[3];
		var dayYear_new = new_d.toString().split(' ')[3];

		var hours = d.getHours(); 
		var minutes = d.getMinutes(); 
		// Check whether AM or PM 
		var newformat = hours >= 12 ? 'PM' : 'AM';  
		// Find current hour in AM-PM Format 
		hours = hours % 12;  
		// To display "0" as "12" 
		hours = hours ? hours : 12;  
		minutes = minutes < 10 ? '0' + minutes : minutes; 
		console.log(hours + ':' + minutes + ' ' + newformat )
		var group_date_time = dayName+", "+dayMonth +" "+dayday +", "+ dayYear +" " +hours + ':' + minutes + ' ' + newformat;
		
	// let diffInMilliSeconds = Math.abs(new Date(dateVal) - new Date()) / 1000;

    // // calculate days
    // const days = Math.floor(diffInMilliSeconds / 86400);
    // diffInMilliSeconds -= days * 86400;
    // console.log('calculated days', days);

    // // calculate hours
    // const hours_s = Math.floor(diffInMilliSeconds / 3600) % 24;
    // diffInMilliSeconds -= hours_s * 3600;
    // console.log('calculated hours', hours_s);

    // // calculate minutes
    // const minutes_s = Math.floor(diffInMilliSeconds / 60) % 60;
    // diffInMilliSeconds -= minutes_s * 60;
    // console.log('minutes', minutes_s);

    // let difference = '';
    // if (days > 0) {
      // difference += (days === 1) ? `${days} day, ` : `${days} days, `;
    // }

    // difference += (hours_s === 0 || hours_s === 1) ? `${hours_s} hour, ` : `${hours_s} hours, `;

    // difference += (minutes_s === 0 || hours_s === 1) ? `${minutes_s} minutes` : `${minutes_s} minutes`; 


	// if(days > 0){
		// return hours + ':' + minutes + ' ' + newformat +" | " + dayMonth + " "+dayday;
	// }
	// else if(hours_s > 0){
		
		// if(hours_s  == 1){
			// return "1 hour ago";
		// }
		// else if(hours_s  > 1 && hours_s < 24 ){
			
			// return hours_s +" hours ago";
		// }
	// }else{
			
		// if(minutes_s  == 0){
			// return "Just Now";
		// }
		// else if(minutes_s  == 1){
			// return "a minute ago";
		// }
		// else if(minutes_s  > 1 && minutes_s < 60 ){
			// return minutes_s +" minutes ago";
		// }
	// }
			if(dayYear_new != dayYear){
				return hours + ':' + minutes + ' ' + newformat +" | " + dayMonth + " "+ dayday + " "+dayYear;
			}else{
				return hours + ':' + minutes + ' ' + newformat +" | " + dayMonth + " "+dayday;
			}
    },
	
	
	
	

    RoundNumber: function (number, places) {
        return +(Math.round(number + "e+" + places) + "e-" + places);
    },
	
	populateDropdown(controlId, values){
		$("#" + controlId).find("option").remove();
		$.each(values, function () {
            var id = this["Id"];
            $("#" + controlId).append($("<option>", { value: id, text: this["Name"] }));
        });
	
	},
	
	FormatDateToYear: function (date) {
        return moment(date, "DD/MM/YYYY").format("YYYY-MM-DD");
    },
}

	$(document).ajaxStart(function () {
		$("#ajax-loading").show();
	});

	$(document).ajaxStop(function () {
		$("#ajax-loading").hide();
	});

	function LoadView(htmlView) {
		$("#slide_div_add").html("");
		$("#slide_div_add").html(htmlView);
	}

	

