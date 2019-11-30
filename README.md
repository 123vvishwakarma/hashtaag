Installing : 
	* mongoose
	* Nodejs
	* Express framework // using npm install express]
    * cretae account in mLabs and connected with that
Created project : 
	1 . Run npm init command which create the package.json file where our all module is there.
	2 . Install express framework for proving routing and middleware for creating our apis.
	3 . Install all npm module whichever in need to create the assignment.
	4 . Run mongodb
	5 . Start creating the apis and assignment.

Part 1 : Download csv file and put in inside the file folder in out assignment project and created script for store the csv data in mlabs database.
	 Npm install for that.
	 Install
	 npm install csvtojson

part 2 : Created api for searching for any state which give all the Districts name belongs to that state.
    API - http://ec2-13-127-203-63.ap-south-1.compute.amazonaws.com:5000/state?q=Kera
    Response : {
    "res": true,
    "message": "success",
    "result": 
    [
        {
            "State": "Kerala",
            "District_code": "4",
            "District": "Kozhikode"
        },
        {
            "State": "Kerala",
            "District_code": "2",
            "District": "Kannur"
        },
        {
            "State": "Kerala",
            "District_code": "5",
            "District": "Malappuram"
        },
        {
            "State": "Kerala",
            "District_code": "2",
            "District": "Kannur"
        },
        {
            "State": "Kerala",
            "District_code": "7",
            "District": "Thrissur"
        },
        {
            "State": "Kerala",
            "District_code": "2",
            "District": "Kannur"
        },
        {
            "State": "Kerala",
            "District_code": "13",
            "District": "Kollam"
        },
        {
            "State": "Kerala",
            "District_code": "2",
            "District": "Kannur"
        },
        {
            "State": "Kerala",
            "District_code": "6",
            "District": "Palakkad"
        },
        {
            "State": "Kerala",
            "District_code": "2",
            "District": "Kannur"
        }
    ]
}

part 3 : Created api for searching for any state which give all the Districts name belongs to that state.
    API - http://ec2-13-127-203-63.ap-south-1.compute.amazonaws.com:5000/town?q=Phule
    Response : {
    "res": true,
    "message": "success",
    "result": [
        {
            "town": "Phulera",
            "State": "Rajasthan",
            "District": "Jaipur"
        }
    ]
}

part 4 : Created api for searching for district which return all the Towns belongs to that District.
    API - http://ec2-13-127-203-63.ap-south-1.compute.amazonaws.com:5000/district?q=Jaip
    Response : {
    "res": true,
    "message": "success",
    "result": [
        {
            "town": "Viratnagar",
            "Urban_status": "M",
            "State_code": "8",
            "State": "Rajasthan",
            "District_code": "12",
            "District": "Jaipur"
        },
        {
            "town": "Shahpura",
            "Urban_status": "M",
            "State_code": "8",
            "State": "Rajasthan",
            "District_code": "12",
            "District": "Jaipur"
        },
        {
            "town": "Kishangarh Renwal",
            "Urban_status": "M",
            "State_code": "8",
            "State": "Rajasthan",
            "District_code": "12",
            "District": "Jaipur"
        },
        {
            "town": "Sambhar",
            "Urban_status": "M",
            "State_code": "8",
            "State": "Rajasthan",
            "District_code": "12",
            "District": "Jaipur"
        },
        {
            "town": "Phulera",
            "Urban_status": "M",
            "State_code": "8",
            "State": "Rajasthan",
            "District_code": "12",
            "District": "Jaipur"
        },
        {
            "town": "Bagru",
            "Urban_status": "M",
            "State_code": "8",
            "State": "Rajasthan",
            "District_code": "12",
            "District": "Jaipur"
        }
    ]
}
