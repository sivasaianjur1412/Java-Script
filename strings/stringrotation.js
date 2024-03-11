function rotationOfString(str1, str2) {
    
    let concatString = str1 + str1;
    if(concatString.includes(str1))
        return true;
    else
        return false;
}

console.log(rotationOfString("JavaJ2eeStrutsHibernate", "StrutsHibernateJavaJ2ee"));