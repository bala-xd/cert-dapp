// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Certification {
    string[] pendingRecords;
    string[] approvedRecords;

    struct certificate {
        string name;
        string aadhar;
        string degree;
        bool isApproved;
        string approvalRemark;
        bool exists;
        uint year;
        string txh;
    }

    struct marks {
        string m1;
        string m2;
        string m3;
        string m4;
        string m5;
        string m6;
        string m7;
        string m8;
    }

    struct student{
        string regno;
        string password;
    }

    mapping (string => student) public students;

    function addstudent (string memory _regno, string memory _pass) public {
        student storage newStudent = students[_regno];
        newStudent.regno = _regno;
        newStudent.password = _pass;
    }

    mapping(string => certificate) public certificates;
    mapping(string => marks) public marklist;
    string[] public aadharList;

    constructor() {
        //admin = msg.sender;
        //student = address(0);
    }

    event recordAdded(string aadhar, string name, string degree);

    function addCertificate(
        string memory _name,
        string memory _aadhar,
        string memory _degree
    ) public {
        certificate storage newCertificate = certificates[_aadhar];
        newCertificate.name = _name;
        newCertificate.aadhar = _aadhar;
        newCertificate.degree = _degree;
        newCertificate.isApproved = false;
        newCertificate.approvalRemark = "Pending Approval";
        newCertificate.exists = true;
        marks storage newMarks = marklist[_aadhar];
        newMarks.m1 = "";
        newMarks.m2 = "";
        newMarks.m3 = "";
        newMarks.m4 = "";
        newMarks.m5 = "";
        newMarks.m6 = "";
        newMarks.m7 = "";
        newMarks.m8 = "";
        newCertificate.txh = "";
        emit recordAdded(_aadhar, _name, _degree);
        aadharList.push(_aadhar);
    }

    function genCertificate(
        string memory _aadhar,
        string memory _txh,
        string memory s1,
        string memory s2,
        string memory s3,
        string memory s4,
        string memory s5,
        string memory s6,
        string memory s7,
        string memory s8
    ) public {
        require(
            certificates[_aadhar].exists == true,
            "This Request does not exist"
        );
        require(
            certificates[_aadhar].isApproved == true,
            "Request is already approved"
        );
        certificates[_aadhar].txh = _txh;
        certificates[_aadhar].year = (block.timestamp / 31557600) + 1970;
        marklist[_aadhar].m1 = s1;
        marklist[_aadhar].m2 = s2;
        marklist[_aadhar].m3 = s3;
        marklist[_aadhar].m4 = s4;
        marklist[_aadhar].m5 = s5;
        marklist[_aadhar].m6 = s6;
        marklist[_aadhar].m7 = s7;
        marklist[_aadhar].m8 = s8;
    }

    function approveCertificate(
        string memory _aadhar,
        string memory _approvalRemark,
        string memory _txh
    ) public {
        require(
            certificates[_aadhar].exists == true,
            "This Request does not exist"
        );
        require(
            certificates[_aadhar].isApproved == false,
            "Request is already approved"
        );
        certificates[_aadhar].isApproved = true;
        certificates[_aadhar].approvalRemark = _approvalRemark;
        certificates[_aadhar].txh = _txh;
    }

    function discardCertificate(
        string memory _aadhar,
        string memory _approvalRemark
    ) public {
        require(
            certificates[_aadhar].exists == true,
            "This Request does not exist"
        );
        require(
            certificates[_aadhar].isApproved == false,
            "Request is already approved"
        );
        certificates[_aadhar].exists = false;
        certificates[_aadhar].approvalRemark = string(
            abi.encodePacked(
                "This Request is rejected. Reason: ",
                _approvalRemark
            )
        );
    }

    function calcPendingRecords() public {
        delete pendingRecords;
        for (uint256 i = 0; i < aadharList.length; i++) {
            string memory currentAadhar = aadharList[i];
            if (
                certificates[currentAadhar].isApproved == false &&
                certificates[currentAadhar].exists == true
            ) {
                pendingRecords.push(certificates[currentAadhar].aadhar);
            }
        }
    }

    function viewPendingRecords() public view returns (string memory) {
        string memory result = "";
        for (uint256 i = 0; i < aadharList.length; i++) {
            string memory currentAadhar = aadharList[i];
            if (
                certificates[currentAadhar].isApproved == false &&
                certificates[currentAadhar].exists == true
            ) {
                result = string(
                    abi.encodePacked(
                        result,
                        certificates[currentAadhar].aadhar,
                        " "
                    )
                );
            }
        }
        return result;
    }
}
