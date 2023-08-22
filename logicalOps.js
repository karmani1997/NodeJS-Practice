let isVerified = false
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if (!isVerified && isLoggedIn && hasPaymentToken){

    console.log("grant access to paid course")
}

else if (isVerified || isGuest){

    console.log("allow free courses")
}

else{
    console.log("Please contact admin")
}