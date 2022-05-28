class ValidInput {
    firstName;
    validEmail;
    mobileNumber;
    password;

    ValidInput(firstName, validEmail, mobileNumber, password) {
        this.firstName = firstName;
        this.validEmail = validEmail;
        this.mobileNumber = mobileNumber;
        this.password = password;
    }

    setName(firstName) {
        const firstnamePattern = RegExp("^[A-Z][a-z]{3,}$");
        if (firstnamePattern.test(firstName)) {
            this.firstName = firstName;
        } else
            console.log("Invalid Input First Name...");
    }

    setEmail(validEmail) {
        const emailPattern = RegExp("^[a-z+]+@(.+)$");
        if (emailPattern.test(validEmail)) {
            this.validEmail = validEmail;
        } else
            console.log("Invalid Email ...");
    }

    setMobileNum(mobileNumber) {
        const mobileNumberPattern = RegExp("/^([+]\d{2}[ ])?\d{10}$/");
        if (mobileNumberPattern.test(mobileNumber)) {
            this.mobileNumber = mobileNumber;
        } else
            console.log("Invalid Mobile Number...");
    }

    setPassword(password) {
        const passwordPattern = RegExp("^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$");
        if (passwordPattern.test(password)) {
            this.password = password;
        } else
            console.log("Invalid Input Password...");
    }
}
obj = new ValidInput();

obj.setName("pinkul");
obj.setEmail("sksaroj@gmail.com");
obj.setMobileNum("91 9856458700");
obj.setPassword("Saroj@Sahoo#22");

console.log(obj);