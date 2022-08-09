exports.getDate = function getDate (){
    

    const today = new Date()
    const options = {
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric"
    };
    const day = today.toLocaleDateString("en-UK", options);
    return day;
    }

    exports.getDay =  function getday (){
    

        const today = new Date()
        const options = {
            weekday:"long",
            day:"long",
     
        };
        const day = today.toLocaleDateString("en-UK", options);
        return day;
        }