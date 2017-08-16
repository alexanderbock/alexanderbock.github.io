var json = {
    "presentations": [
        {
            "occasion"  : "Space Apps NYC",
            "title"     : "OpenSpace",
            "location"  : "New York, USA",
            "year"      : "2017",
            "type"      : "Invited",
            "video"     : "https://www.youtube.com/watch?v=p8UtGyKFdRo"
        },
        {
            "occasion"  : "Center for Data Science Lunch Series",
            "title"     : "OpenSpace: Moving from What to How in Science Communication",
            "location"  : "New York, USA",
            "year"      : "2017",
            "type"      : "Seminar"
        },
        {
            "occasion"  : "MIT Media Lab",
            "title"     : "OpenSpace: Moving from What to How in Science Communication",
            "location"  : "Boston, USA",
            "year"      : "2017",
            "type"      : "Invited"
        },
        {
            "occasion"  : "Crossdrive",
            "title"     : "OpenSpace: From What to How in Science Communication",
            "location"  : "Turin, Italy",
            "year"      : "2016",
            "type"      : "Invited"
        },
        {
            "occasion"  : "EuroVis",
            "title"     : "Hybrid Data Visualization Based on Depth Complexity Histogram Analysis",
            "location"  : "Groningen, The Netherlands",
            "year"      : "2016",
            "type"      : "Paper"
        },
        {
            "occasion"  : "EuroVis",
            "title"     : "OpenSpace: Visualizing the Universe",
            "location"  : "Groningen, The Netherlands",
            "year"      : "2016",
            "type"      : "Keynote*",
            "video"     : "https://vimeo.com/169967499"
        },
        {
            "occasion"  : "SIGRAD",
            "title"     : "Hybrid Data Visualization Based on Depth Complexity Histogram Analysis",
            "location"  : "Visby, Sweden",
            "year"      : "2016",
            "type"      : "Paper"
        },
        {
            "occasion"  : "International CCMC Workshop",
            "title"     : "OpenSpace: A Collaborative Science Dissemination Tool",
            "location"  : "Annapolis, USA",
            "year"      : "2016",
            "type"      : "Invited"
        },
        {
            "occasion"  : "American Geophysical Union, Fall Meeting",
            "title"     : "OpenSpace: An Open-Source Framework for Data Visualization and Contextualization",
            "location"  : "San Francisco, USA",
            "year"      : "2015",
            "type"      : "Abstract"
        },
        {
            "occasion"  : "Vis",
            "title"     : "Visual Verification of Space Weather Ensemble Simulations",
            "location"  : "Chicago, USA",
            "year"      : "2015",
            "type"      : "Paper"
        },
        {
            "occasion"  : "Laboratory of Organic Electronic Seminars",
            "title"     : "Visualization. Why? How? What?",
            "location"  : "Norrköping, Sweden",
            "year"      : "2015",
            "type"      : "Invited"
        },
        {
            "occasion"  : "MSB Emergency Preparedness Seminar",
            "title"     : "An Interactive Visualization System for Urban Search & Rescue Mission Planning",
            "location"  : "Katrineholm, Sweden",
            "year"      : "2015",
            "type"      : "Invited"
        },
        {
            "occasion"  : "Campusveckan",
            "title"     : "Visualization and its Applications",
            "location"  : "Norrköping, Sweden",
            "year"      : "2015",
            "type"      : "Introductory"
        },
        {
            "occasion"  : "1st KHA/AUT Computer Science/Engineering Seminar",
            "title"     : "Introduction to Scientific Visualization and its Applications",
            "location"  : "Tehran, Iran",
            "year"      : "2015",
            "type"      : "Invited"
        },
        {
            "occasion"  : "Symposium on Safety, Security, and Rescue Robotics",
            "title"     : "An Interactive Visualization System for Urban Search & Rescue Mission Planning",
            "location"  : "Toyako-cho, Japan",
            "year"      : "2014",
            "type"      : "Paper"
        },
        {
            "occasion"  : "Vision, Modelling, and Visualization",
            "title"     : "Supporting Urban Search & Rescue Mission Planning Through Visualization-Based Analysis",
            "location"  : "Darmstadt, Germany",
            "year"      : "2014",
            "type"      : "Paper"
        },
        {
            "occasion"  : "Solar Information Processing Workshop",
            "title"     : "Towards Visual Verification of Coronal Mass Ejections in ENLIL Ensemble Simulations through Optical Flow Analysis",
            "location"  : "La Roche-en-Ardenne, Belgium",
            "year"      : "2014",
            "type"      : "Invited"
        },
        {
            "occasion"  : "International CCMC Workshop",
            "title"     : "CCMC-LiU-AMNH Partnership: Advanced Visualization",
            "location"  : "Annapolis, MD, USA",
            "year"      : "2014",
            "type"      : "Invited"
        },
        {
            "occasion"  : "SIGRAD",
            "title"     : "Poor Man's Rendering of Segmented Data",
            "location"  : "Norrköping, Sweden",
            "year"      : "2013",
            "type"      : "Paper"
        },
        {
            "occasion"  : "PacificVis",
            "title"     : "Guiding Deep Brain Stimulation Interventions by Fusing Multimodal Uncertainty Regions",
            "location"  : "Sydney, Australia",
            "year"      : "2013",
            "type"      : "Paper"
        },
        {
            "occasion"  : "Vis",
            "title"     : "Coherency-Based Curve Compression for High-Order Finite Element Model Visualization",
            "location"  : "Seattle, USA",
            "year"      : "2012",
            "type"      : "Paper"
        },
        {
            "occasion"  : "Swedish e-Science Research Center",
            "title"     : "Voreen",
            "location"  : "Norrköping, Sweden",
            "year"      : "2012",
            "type"      : "Workshop"
        },
    ]
}

// Apply the handlebars
$(function () {
    var theTemplateScript = $("#presentation-template").html();
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
