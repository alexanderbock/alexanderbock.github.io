var json = {
    "teachings": [
        {
            "years"       : "2017",
            "role"        : "Supervisor",
            "class"       : "DS-GA 1009",
            "description" : "Practical Data Visualization Internship",
            "university"  : "New York University"
        },
        {
            "years"       : "2013, 2014, 2015",
            "role"        : "Lab assistant",
            "class"       : "TNM093",
            "description" : "Practical Data Visualization and Virtual Reality",
            "university"  : "Linköping University"
        },
        {
            "years"       : "2014, 2015",
            "role"        : "Lab assistant",
            "class"       : "TNM094",
            "description" : "Medieteknisk kandidatproject (Bachelor project in Media technology)",
            "university"  : "Linköping University"
        },
        {
            "years"       : "2014",
            "role"        : "Lab assistant",
            "class"       : "TNG033",
            "description" : "Programming in C++",
            "university"  : "Linköping University"
        },
        {
            "years"       : "2013, 2014",
            "role"        : "Lab assistant",
            "class"       : "TND012",
            "description" : "Programming in C++",
            "university"  : "Linköping University"
        },
        {
            "years"       : "2012, 2013",
            "role"        : "Lab assistant",
            "class"       : "TNM090",
            "description" : "Software Engineering",
            "university"  : "Linköping University"
        },
        {
            "years"       : "2012",
            "role"        : "Lab assistant",
            "class"       : "TNM067",
            "description" : "Scientific Visualization",
            "university"  : "Linköping University"
        },
        {
            "years"       : "2011",
            "role"        : "Lab assistant",
            "class"       : "TNM046",
            "description" : "Computer Graphics",
            "university"  : "Linköping University"
        }





    ]
}

// Apply the handlebars
$(function () {
    var theTemplateScript = $("#teaching-template").html();
    var theTemplate = Handlebars.compile(theTemplateScript);

    // fetch('assets/publications.json')
    // .then(function(response) {
    //   if (!response.ok) {
    //     throw Error(response.statusText);
    //   }
    //   return response.json();
    // })
    // .then(function(json) {
        var theCompiledHtml = theTemplate(json);
        $('.content-placeholder').html(theCompiledHtml);
    // })
    // .catch(function(error) {
    //   console.log(error)
    // })
})
