var Services = {
    Get: function (id, successCallback, failureCallback, isAsync) {
		var method = "details/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	GetBooklistforAdmin: function (id, successCallback, failureCallback, isAsync) {
		var method = "Services/GetBooklistforAdmin/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	getbooklistforStock: function (id, successCallback, failureCallback, isAsync) {
		var method = "Services/getbooklistforStock/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	updateBookStock: function (id, qty, successCallback, failureCallback, isAsync) {
		var method = "Services/updateBookStock/"+id+"/"+qty+"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	getbookdetailsByid: function (id, successCallback, failureCallback, isAsync) {
		var method = "Services/getbookdetailsByid/"+id+"/"
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	getallbookswithoutSubcription: function (id, successCallback, failureCallback, isAsync) {
		var method = "Services/getallbookswithoutSubcription/"
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	getallbookswithSubcription: function (id, successCallback, failureCallback, isAsync) {
		var method = "Services/getallbookswithSubcription/"
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	addbooktosubscription: function (book_id, wfrom, successCallback, failureCallback, isAsync) {
		var method = "Services/addbooktosubscription/"+book_id+"/"+wfrom+"/"
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },






	getinboxDetail: function (inbid, successCallback, failureCallback, isAsync) {
		var method = "Services/getinboxDetail/"+inbid+"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	updatemailseen: function (inbid, successCallback, failureCallback, isAsync) {
		var method = "Services/updatemailseen/"+inbid+"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	updateActivityLog: function (id , file_name, where_from, successCallback, failureCallback, isAsync) {
		var method = "Services/updateActivityLog/"+id+"/"+file_name+"/"+where_from+"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	// deluserinboxlist: function (inbid, successCallback, failureCallback, isAsync) {
		// var method = "Services/deluserinboxlist/"+inbid+"/";
        // Common.GetData(method, "GET", null,
            // successCallback,
            // failureCallback,
            // isAsync
        // );
    // },


	deluserinboxlist: function (inbid, successCallback, failureCallback, isAsync) {
        Common.PostData("Services/deluserinboxlist/", "POST", inbid,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	add_newcomment_to_fileid: function (array_reply, successCallback, failureCallback, isAsync) {
        Common.PostData("Services/add_newcomment_to_fileid/", "POST", array_reply,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	getfile_detailed_report: function (file_post, successCallback, failureCallback, isAsync) {
        Common.PostData("Services/getfile_detailed_report/", "POST", file_post,
            successCallback,
            failureCallback,
            isAsync
        );
    },


	getfilemanagerlist: function (userid, userrole,sel_dpt, successCallback, failureCallback, isAsync) {
		var method = "Services/getfilemanagerlist/"+userid+"/"+userrole+"/"+sel_dpt+"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },


	detail_by_uploader_mailid_receivers: function (mailid, successCallback, failureCallback, isAsync) {
		var method = "Services/detail_by_uploader_mailid_receivers/"+mailid+"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },


	get_folderfiles_by_folder_id: function (folder_id,uploader_id, successCallback, failureCallback, isAsync) {
		var method = "Services/get_folderfiles_by_folder_id/"+folder_id+"/"+uploader_id+"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },


	getcomments_by_folder: function (folder_id, successCallback, failureCallback, isAsync) {
		if(folder_id!=undefined || folder_id!="undefined"){
		var method = "Services/getcomments_by_folder/"+folder_id+"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
		}
    },



	detail_by_uploader_mailid: function (mail_id ,uploader, successCallback, failureCallback, isAsync) {
		var method = "Services/detail_by_uploader_mailid/"+mail_id+"/"+uploader+"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },



	getfolder_detailed_report: function (folder_id,userid, successCallback, failureCallback, isAsync) {
		var method = "Services/getfolder_detailed_report/"+folder_id+"/"+userid+"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },




	getfolder_detailed_FM: function (folder_id, successCallback, failureCallback, isAsync) {
		var method = "Services/getfolder_detailed_FM/"+folder_id+"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },


	getinboxDetail_receivers: function (userid, successCallback, failureCallback, isAsync) {
		var method = "Services/getinboxDetail_receivers/"+userid+"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	getoutboxlist: function (userid, successCallback, failureCallback, isAsync) {
		var method = "Services/getoutboxlist/"+userid+"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	getfile_id: function (fileid, successCallback, failureCallback, isAsync) {
		var method = "Services/getfile_id/"+fileid+"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

//  GetactivityLogs
    GetactivityLogs: function (Id, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetactivityLogs/"+ Id +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    //  Get Personal Details
    GetpersonalDetails: function (user_id, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetpersonalDetails/"+ user_id +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    //  Get Personal Details
    getfile_count: function (user_id, successCallback, failureCallback, isAsync) {
        var  method = "Services/getfile_count/"+ user_id +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    //  Get folder Details
    GetfolderDetails: function (personal_id, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetfolderDetails/"+ personal_id +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    //  Get Contact Details
    /* GetcontactDetails: function (user_name, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetcontactDetails/"+ user_name +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    }, */

	GetcontactDetails: function (user_id, user_type, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetcontactDetails/"+ user_id +"/"+ user_type +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    //  Get department List
    GetdepartmentList: function ( successCallback, failureCallback, isAsync) {
        var  method = "Services/GetdepartmentList/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    //  Get new user id
    GetnewUserId: function ( successCallback, failureCallback, isAsync) {
        var  method = "Services/GetnewUserId/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    // //  Get Unit Details By Id
    // GetUnitDetailsById: function (UnitId, successCallback, failureCallback, isAsync) {
        // var  method = "Services/GetUnitDetailsById/"+ UnitId +"/";
        // Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    // },

    //  Get Department Id By Name
    GetDepartmentIdByName: function (Department, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetDepartmentIdByName/"+ Department +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    //  Get recycle Bin Details
    GetrecycleBinDetails: function (user_id , successCallback, failureCallback, isAsync) {
        var  method = "Services/GetrecycleBinDetails/"+ user_id +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

	//  Get User Account Details
    GetUserAccountDetails: function (user_id, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetUserAccountDetails/"+ user_id +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },


    //  Get Recent Activity Logs
    GetRecentActivityLogs: function (Id, action, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetRecentActivityLogs/"+ Id +"/"+ action +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },



// Admin1 module vinay



    //  Get Unit Details
    GetunitDetails: function (user_name , successCallback, failureCallback, isAsync) {
        var  method = "Services/GetunitDetails/"+ user_name +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GeneratenewUnitId: function (successCallback, failureCallback, isAsync) {
        var  method = "Services/GeneratenewUnitId/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },



    GetdivisionDetails: function (sector_id , successCallback, failureCallback, isAsync) {
        var  method = "Services/GetdivisionDetails/"+ sector_id +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetSectorName: function (sector_id , successCallback, failureCallback, isAsync) {
        var  method = "Services/GetSectorName/"+ sector_id +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GenerateNewDivisionId: function (successCallback, failureCallback, isAsync) {
        var  method = "Services/GenerateNewDivisionId/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },



    GetbranchDetails: function (DivisionId , successCallback, failureCallback, isAsync) {
        var  method = "Services/GetbranchDetails/"+ DivisionId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetDivisionName: function (DivisionId , successCallback, failureCallback, isAsync) {
        var  method = "Services/GetDivisionName/"+ DivisionId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GenerateNewBranchId: function (successCallback, failureCallback, isAsync) {
        var  method = "Services/GenerateNewBranchId/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },




    GetdepartmentDetails: function (DivisionId, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetdepartmentDetails/"+ DivisionId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GenerateNewDeptId: function (successCallback, failureCallback, isAsync) {
        var  method = "Services/GenerateNewDeptId/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },



    GetdesignationDetails: function (DivisionId, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetdesignationDetails/"+ DivisionId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GenerateNewDesignationId: function (successCallback, failureCallback, isAsync) {
        var  method = "Services/GenerateNewDesignationId/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    LoadDepartmentList: function (DivisionId, successCallback, failureCallback, isAsync) {
        var  method = "Services/LoadDepartmentList/"+ DivisionId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },


    /* GetmemberDetails: function (BranchCode , successCallback, failureCallback, isAsync) {
        var  method = "Services/GetmemberDetails/"+ BranchCode +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    }, */

    GetmemberDetails: function (BranchCode, user_id, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetmemberDetails/"+ BranchCode +"/"+ user_id +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetmemberFileDetails: function (UserId, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetmemberFileDetails/"+ UserId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetBranchName: function (BranchCode , successCallback, failureCallback, isAsync) {
        var  method = "Services/GetBranchName/"+ BranchCode +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GenerateNewUserId: function (successCallback, failureCallback, isAsync) {
        var  method = "Services/GenerateNewUserId/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    LoadDesignationList: function (department_name, successCallback, failureCallback, isAsync) {
        var  method = "Services/LoadDesignationList/"+ department_name +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetUnitDetailsById: function (UnitId , successCallback, failureCallback, isAsync) {
        var  method = "Services/GetUnitDetailsById/"+ UnitId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetDivisionDetailsById: function (DivisionId , successCallback, failureCallback, isAsync) {
        var  method = "Services/GetDivisionDetailsById/"+ DivisionId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetDivisionAdminDetails: function (DivisionId , successCallback, failureCallback, isAsync) {
        var  method = "Services/GetDivisionAdminDetails/"+ DivisionId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetBranchDetailsById: function (BranchCode , successCallback, failureCallback, isAsync) {
        var  method = "Services/GetBranchDetailsById/"+ BranchCode +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

	GetBranchAdminDetails: function (BranchCode , successCallback, failureCallback, isAsync) {
		var  method = "Services/GetBranchAdminDetails/"+ BranchCode +"/";
		Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetDepartmentDetailsById: function (DeptId , successCallback, failureCallback, isAsync) {
        var  method = "Services/GetDepartmentDetailsById/"+ DeptId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetDesignationDetailsById: function (DesignationId , successCallback, failureCallback, isAsync) {
        var  method = "Services/GetDesignationDetailsById/"+ DesignationId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetUserDetailsById: function (UserId , successCallback, failureCallback, isAsync) {
        var  method = "Services/GetUserDetailsById/"+ UserId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetDepartmentName: function (UserId , successCallback, failureCallback, isAsync) {
        var  method = "Services/GetDepartmentName/"+ UserId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetDesignationName: function (UserId , successCallback, failureCallback, isAsync) {
        var  method = "Services/GetDesignationName/"+ UserId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetUserActivityLogs: function (Id, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetUserActivityLogs/"+ Id +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    LoadGroupDetails: function (successCallback, failureCallback, isAsync) {
        var  method = "Services/LoadGroupDetails/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    LoadDepartmentDetailsForContacts: function (user_id , successCallback, failureCallback, isAsync) {
        var  method = "Services/LoadDepartmentDetailsForContacts/"+ user_id +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    LoadDesignationDetailsForContacts: function (department_id , successCallback, failureCallback, isAsync) {
        var  method = "Services/LoadDesignationDetailsForContacts/"+ department_id +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

	getdptInboxList: function (userid, successCallback, failureCallback, isAsync) {
		var method = "Services/getdptInboxList/"+userid+"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	getuserScreenLock: function (userid, successCallback, failureCallback, isAsync) {
		var method = "Services/getuserScreenLock/"+userid+"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	updateuserScreenLock: function (userid,lock_status, successCallback, failureCallback, isAsync) {
		var method = "Services/updateuserScreenLock/"+userid+"/"+lock_status+"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },


	CheckuserpasswordForScreenlock: function (userid,send_pass, successCallback, failureCallback, isAsync) {
		var method = "Services/CheckuserpasswordForScreenlock/"+userid+"/"+send_pass+"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	upload_profile_img: function (inbid, successCallback, failureCallback, isAsync) {
        Common.PostData("Services/upload_profile_img/", "POST", inbid,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	updateuserchangepassword: function (userid,newpass,whfrom, successCallback, failureCallback, isAsync) {
		var method = "Services/updateuserchangepassword/"+userid+"/"+newpass+"/"+whfrom+"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	addreqfilestodb: function (data_req, successCallback, failureCallback, isAsync) {
        Common.PostData("Services/addreqfilestodb/", "POST", data_req,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	Getdetailsreqreclist: function (userid, wfrom, successCallback, failureCallback, isAsync) {
		var method = "Services/Getdetailsreqreclist/"+userid+"/"+wfrom+"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	//Dashboard
	GetDashboardData: function (Id, successCallback, failureCallback, isAsync) {
		var method = "Services/dashboardData/"+ Id +"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	GetRecentFiles: function (Id, successCallback, failureCallback, isAsync) {
		var method = "Services/RecentFiles/"+ Id +"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },
	// New One
	UpdateFileFromFolder: function (formData, successCallback, failureCallback, isAsync) {
        Common.PostData("Services/PostUpdateFileFromFolder/", "POST", formData,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	getuserfileidrequest_manager: function (userid,userdpt, successCallback, failureCallback, isAsync) {
		var method = "Services/getuserfileidrequest_manager/"+ userid +"/"+ userdpt +"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	getuserfileidrequest: function (userid,userdpt, successCallback, failureCallback, isAsync) {
		var method = "Services/getuserfileidrequest/"+ userid +"/"+ userdpt +"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	//My Request
	GetAllDeptMyRequest: function (Id, userid, successCallback, failureCallback, isAsync) {
		var method = "Services/GetAllDeptMyRequest/"+ Id +"/"+ userid +"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	GetAllSubdivisionMyRequest_dptid: function (Id, wfrom, userid_dpt, successCallback, failureCallback, isAsync) {
		var method = "Services/GetAllSubdivisionMyRequest_dptid/"+ Id +"/"+ wfrom +"/"+ userid_dpt +"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	GetAllfolderIDMyRequest_Subid: function (Id, wfrom , userid, successCallback, failureCallback, isAsync) {
		var method = "Services/GetAllfolderIDMyRequest_Subid/"+ Id +"/"+ wfrom +"/"+ userid +"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	GetAdminDetails: function (user_id , successCallback, failureCallback, isAsync) {
        var  method = "Services/GetAdminDetails/"+ user_id +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

	LoadContactsHierarchy: function (section_id, successCallback, failureCallback, isAsync) {
		var method = "Services/LoadContactsHierarchy/"+section_id+"/";
        Common.GetData(method, "GET", null,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	LoadContactsHierarchy_name_list_add: function (parent_child, successCallback, failureCallback, isAsync) {
        Common.PostData("Services/LoadContactsHierarchy_name_list_add/", "POST", parent_child ,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	/* GetSubDivsionDetails: function (DivisionId, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetSubDivsionDetails/"+ DivisionId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    }, */

	GetSubDivsionDetails: function (DivisionId, DeptId, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetSubDivsionDetails/"+ DivisionId +"/"+ DeptId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GenerateNewSubDivisionId: function (successCallback, failureCallback, isAsync) {
        var  method = "Services/GenerateNewSubDivisionId/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetSubDivisionDetailsById: function (SubDivisionId , successCallback, failureCallback, isAsync) {
        var  method = "Services/GetSubDivisionDetailsById/"+ SubDivisionId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    LoadSubDivisionList: function (department_id, successCallback, failureCallback, isAsync) {
        var  method = "Services/LoadSubDivisionList/"+ department_id +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },


	DeleteContactsHierarchy: function (contid, successCallback, failureCallback, isAsync) {
        Common.PostData("Services/DeleteContactsHierarchy/", "POST", contid ,
            successCallback,
            failureCallback,
            isAsync
        );
    },

	GetAllDeptMyRequest_branch_Div: function (branch_id, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetAllDeptMyRequest_branch_Div/"+ branch_id +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

	upload_logo: function (formData, successCallback, failureCallback, isAsync) {
        Common.PostData("Services/upload_logo/", "POST", formData,
            successCallback,
            failureCallback,
            isAsync
        );
    },

    GetSocietyMemberDetails: function (user_id, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetSocietyMemberDetails/"+ user_id +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetEmployeeDetails: function (user_id, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetEmployeeDetails/"+ user_id +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetSocietyDetails: function (branch_id , successCallback, failureCallback, isAsync) {
        var  method = "Services/GetSocietyDetails/"+ branch_id +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GenerateSocietyId: function (successCallback, failureCallback, isAsync) {
        var  method = "Services/GenerateSocietyId/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

	GetSocietyAdminDetails: function (Society_id , successCallback, failureCallback, isAsync) {
		var  method = "Services/GetSocietyAdminDetails/"+ Society_id +"/";
		Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetSocietyEmployeeDetails: function (Society_id, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetSocietyEmployeeDetails/"+ Society_id +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetDistrictName: function (id, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetDistrictName/";
        Common.GetData(method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetTalukName: function (DivisionId, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetTalukName/"+ DivisionId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetVillageName: function (tid, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetVillageName/"+ tid +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetSocietyDetails: function (branch_id , successCallback, failureCallback, isAsync) {
        var  method = "Services/GetSocietyDetails/"+ branch_id +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GenerateSocietyId: function (successCallback, failureCallback, isAsync) {
        var  method = "Services/GenerateSocietyId/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

	GetSocietyAdminDetails: function (Society_id , successCallback, failureCallback, isAsync) {
		var  method = "Services/GetSocietyAdminDetails/"+ Society_id +"/";
		Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetSocietyEmployeeDetails: function (Society_id, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetSocietyEmployeeDetails/"+ Society_id +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetApplicationInfo: function (BranchId,UserType, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetApplicationDetails/"+ BranchId +"/"+ UserType +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetLoanSelectedApplnDetails: function (ApplnId, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetLoanSelectedApplnDetails/"+ ApplnId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetLoanLandDetailsonIdBasis: function (ApplnId, successCallback, failureCallback, isAsync) {
        var  method = "Services/LoanLandDetailsonIdBasis/"+ ApplnId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetProjectDetailsonIdBasis: function (ApplnId, successCallback, failureCallback, isAsync) {
        var  method = "Services/ProjectDetailsonIdBasis/"+ ApplnId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetMovableAssestDetailsonIdBasis: function (ApplnId, successCallback, failureCallback, isAsync) {
        var  method = "Services/AssestDetailsonIdBasis/"+ ApplnId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetImMovableAssestDetailsonIdBasis: function (ApplnId, successCallback, failureCallback, isAsync) {
        var  method = "Services/IMVAssestDetailsonIdBasis/"+ ApplnId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetPahaniPatrakDocType: function (ApplnId, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetPahaniPatrak_DocType/"+ ApplnId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetLandHoldingDocType: function (ApplnId, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetLandHolding_DocType/"+ ApplnId +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetApplicationStatus: function (Id,Type, successCallback, failureCallback, isAsync) {
        var  method = "Services/GetApplicationStatus/"+ Id +"/"+ Type +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetApplnSearchInfo: function(Id,UserType,start,end,ApplnStatus,ApplnType,BrList,ScList, successCallback, failureCallback, isAsync){
        var  method = "Services/GetApplnSearchInfo/"+ Id +"/"+ UserType +"/"+ start +"/"+ end +"/"+ ApplnStatus +"/"+ ApplnType +"/"+ BrList +"/"+ ScList +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetBasicDetailsofApplication: function(ApplicationNo, successCallback, failureCallback, isAsync){
        var  method = "Services/GetBasicDetailsofApplication/"+ ApplicationNo +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    GetApplicationDocument: function(ApplicationNo, successCallback, failureCallback, isAsync){
        var  method = "Services/ApplicationDocument/"+ ApplicationNo +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    getsocietydetails_mem: function (society_id, successCallback, failureCallback, isAsync) {
        var  method = "Services/getsocietydetails_mem/"+ society_id +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    getBasciMemInfo_R: function (mem_id, successCallback, failureCallback, isAsync) {
        var  method = "Services/getBasciMemInfo_R/"+ mem_id +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

    getMemLHDInfo_R: function (mem_id, successCallback, failureCallback, isAsync) {
        var  method = "Services/getMemLHDInfo_R/"+ mem_id +"/";
        Common.GetData( method, "GET", null, successCallback, failureCallback, isAsync );
    },

}