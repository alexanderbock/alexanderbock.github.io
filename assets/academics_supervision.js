var json_ongoing = {
    "supervisions": [
        {
            "name"       : "Klas Eskilson",
            "title"      : "OpenSpace: Developing a Web GUI for Rapid Prototyping and Public Exhibitions",
            "university" : "Linköping University",
            "location"   : "New York University",
            "role"       : "Supervisor*"
        },
        {
            "name"       : "Michael Marcinkowski",
            "title"      : "Contextualization of Satellite Mission Planning for Deep Space Planetary Encounters",
            "university" : "Linköping University",
            "location"   : "American Museum of Natural History",
            "role"       : "Supervisor"
        }
    ]
}

var json_finished = {
    "supervisions": [
        {
            "name"       : "Jonathan Bosson",
            "title"      : "Multi-Touch Interfaces for Public Exploration and Navigation in Astronomical Visualizations",
            "university" : "Linköping University",
            "location"   : "University of Utah, Scientific Computing and Imaging Institute",
            "role"       : "Supervisor*"
        },
        {
            "name"       : "Michael Novén \& Oskar Carlbaum",
            "title"      : "Real-Time Magnetohydrodynamic Space Weather Visualization",
            "university" : "Linköping University",
            "location"   : "NASA Goddard Space Flight Center, Community Coordinated Modeling Center",
            "role"       : "Supervisor*"
        },
        {
            "name"       : "Michael Sjöström \& Rickard Lindstedt",
            "title"      : "Interactive In-Situ Visualization of Mars Science Laboratory Data",
            "university" : "Linköping University",
            "location"   : "American Museum of Natural History",
            "role"       : "Supervisor*"
        },
        {
            "year"       : "2017",
            "name"       : "Jonas Strandstedt",
            "title"      : "Multi-Volume Rendering in OpenSpace Using A-Buffers for Space Weather Visualizations",
            "thesis"     : "http://liu.diva-portal.org/smash/get/diva2:1098484/FULLTEXT01.pdf",
            "university" : "Linköping University",
            "location"   : "NASA Goddard Space Flight Center, Community Coordinated Modeling Center",
            "role"       : "Supervisor"
        },
        {
            "year"       : "2016",
            "name"       : "Erik Broberg \& Kalle Bladin",
            "title"      : "Design and Implementation of an Out-of-Core Globe Rendering System Using Multiple Map Services",
            "thesis"     : "http://liu.diva-portal.org/smash/get/diva2:1098476/FULLTEXT01.pdf",
            "university" : "Linköping University",
            "location"   : "American Museum of Natural History",
            "role"       : "Supervisor"
        },
        {
            "year"       : "2016",
            "name"       : "Michael Nilsson \& Sebastian Piwell",
            "title"      : "Bridging the Gap: Providing Public Science Dissemination Through Expert Tools",
            "thesis"     : "http://liu.diva-portal.org/smash/get/diva2:1072646/FULLTEXT01.pdf",
            "university" : "Linköping University",
            "location"   : "NASA Goddard Space Flight Center, Community Coordinated Modeling Center",
            "role"       : "Supervisor"
        },
        {
            "year"       : "2015",
            "name"       : "Tomas Forsyth Rosin \& Emil Axelsson",
            "title"      : "Spatiotemporal Multimodal Visualization of Volumetric Simulations and In-Situ Satellite Data",
            "thesis"     : "http://liu.diva-portal.org/smash/get/diva2:968704/FULLTEXT01.pdf",
            "university" : "Linköping University",
            "location"   : "NASA Goddard Space Flight Center, Community Coordinated Modeling Center",
            "role"       : "Supervisor"
        },
        {
            "year"       : "2015",
            "name"       : "Karl-Johan Krantz",
            "title"      : "Cross-Platform Post-Mortem Analysis in a Distributed Continuous Integration System",
            "thesis"     : "https://www.diva-portal.org/smash/get/diva2:874878/FULLTEXT01.pdf",
            "university" : "Linköping University",
            "location"   : "Skype",
            "role"       : "Supervisor"
        },
        {
            "year"       : "2015",
            "name"       : "Anton Arbring",
            "title"      : "Public Dissemination of Deep Space Missions through Immersive Visualization",
            "thesis"     : "http://antonarbring.se/docs/masterthesis.pdf",
            "university" : "Linköping University",
            "location"   : "American Museum of Natural History",
            "role"       : "Supervisor"
        },
        {
            "year"       : "2015",
            "name"       : "Emil Nielsen",
            "title"      : "Real-time Wind Direction Filtering for Sailboat Race Tracking",
            "thesis"     : "http://www.diva-portal.org/smash/get/diva2:838805/FULLTEXT01.pdf",
            "university" : "Linköping University",
            "location"   : "TracTrac ApS",
            "role"       : "Second Supervisor"
        },
        {
            "year"       : "2014",
            "name"       : "Hans-Christian Helltegen",
            "title"      : "Visualizing Space Weather: Acquiring and Rendering Data of Earth's Magnetosphere",
            "university" : "Linköping University",
            "location"   : "NASA Goddard Space Flight Center, Community Coordinated Modeling Center",
            "role"       : "Supervisor"
        },
        {
            "year"       : "2014",
            "name"       : "Victor Sand",
            "title"      : "Dynamic Visualization of Space Weather Data",
            "thesis"     : "http://liu.diva-portal.org/smash/get/diva2:763094/FULLTEXT01.pdf",
            "university" : "Linköping University",
            "location"   : "NASA Goddard Space Flight Center, Community Coordinated Modeling Center",
            "role"       : "Supervisor"
        },
        {
            "year"       : "2013",
            "name"       : "Martin Törnros",
            "title"      : "Interactive Visualization of Space Weather Data",
            "thesis"     : "http://liu.diva-portal.org/smash/get/diva2:667227/FULLTEXT01.pdf",
            "university" : "Linköping University",
            "location"   : "NASA Goddard Space Flight Center, Community Coordinated Modeling Center",
            "role"       : "Supervisor"
        },
        {
            "year"       : "2012",
            "name"       : "Sandra Stendahl",
            "title"      : "Visualization of Ferroelectric and Polarization Domains in Barium Titanate",
            "university" : "Linköping University",
            "role"       : "Supervisor"
        },
    ]
}

// Apply the handlebars
$(function () {
    var theTemplateScript = $("#supervision-template").html();
    var theTemplate = Handlebars.compile(theTemplateScript);

    // fetch('assets/publications.json')
    // .then(function(response) {
    //   if (!response.ok) {
    //     throw Error(response.statusText);
    //   }
    //   return response.json();
    // })
    // .then(function(json) {
        var theCompiledHtml = theTemplate(json_finished);
        $('.content-placeholder-finished').html(theCompiledHtml);
    // })
    // .catch(function(error) {
    //   console.log(error)
    // })
    // 
    // 
    var theCompiledHtmlOngoing = theTemplate(json_ongoing);
    $('.content-placeholder-ongoing').html(theCompiledHtmlOngoing);
})
