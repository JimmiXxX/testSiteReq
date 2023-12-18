function fdateTwoDigits( d ) {
    let now = new Date();
    now.setDate( now.getDate() + d );
    let mm = now.getMonth() + 1;
    let day = now.getDate();
    if ( now.getDate() < 10 )
        day = "0" + now.getDate();
    if ( mm < 10 )
        mm = "0" + mm;
    document.write( " " + day + "." + mm + "." + now.getFullYear() + " " );
}

fdateTwoDigits()