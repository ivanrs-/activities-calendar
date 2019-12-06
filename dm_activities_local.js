function loadCalendar(){
    var today = moment().toISOString();
    // 'isoWeek' from Monday to Sunday
    // 'week' from Sunday to Saturday
    var startOfWeek = moment().startOf('week').format('YYYY-MM-DD');
    var endOfWeek = moment().add(1, 'weeks').endOf('week').format('YYYY-MM-DD');

    // Output from Odata call from CRM
    // Update Date Values as needed
    var results = [{
        "@odata.context": "https://myinstance.crm.dynamics.com/api/data/v8.2/$metadata#ir_store_visits(ir_name,ir_status,ir_visit_date)",
        "@odata.count": 8,
        "@Microsoft.Dynamics.CRM.totalrecordcount": 8,
        "@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded": false,
        "value": [{
            "@odata.etag": "W/\"1895074462\"",
            "ir_name": "S0020 Priority:4",
            "ir_status@OData.Community.Display.V1.FormattedValue": "Scheduled",
            "ir_status": 100000000,
            "ir_visit_date@OData.Community.Display.V1.FormattedValue": "12/02/2019",
            "ir_visit_date": "2019-12-02",
            "ir_store_visitid": "c265850b-b778-e811-a955-000d3a1d51a5"
        }, {
            "@odata.etag": "W/\"1895074466\"",
            "ir_name": "S0029 Priority:9",
            "ir_status@OData.Community.Display.V1.FormattedValue": "Scheduled",
            "ir_status": 100000000,
            "ir_visit_date@OData.Community.Display.V1.FormattedValue": "12/02/2019",
            "ir_visit_date": "2019-12-02",
            "ir_store_visitid": "031d8446-9079-e811-a955-000d3a1d51a5"
        }, {
            "@odata.etag": "W/\"1895074464\"",
            "ir_name": "S0021 Priority:1",
            "ir_status@OData.Community.Display.V1.FormattedValue": "Scheduled",
            "ir_status": 100000000,
            "ir_visit_date@OData.Community.Display.V1.FormattedValue": "7/13/2019",
            "ir_visit_date": "2019-07-24",
            "ir_store_visitid": "95e1663e-8a80-e811-a957-000d3a1d51a5"
        }, {
            "@odata.etag": "W/\"1895074465\"",
            "ir_name": "S0021 Priority:1",
            "ir_status@OData.Community.Display.V1.FormattedValue": "Cancelled",
            "ir_status": 100000000,
            "ir_visit_date@OData.Community.Display.V1.FormattedValue": "7/14/2019",
            "ir_visit_date": "2019-07-25",
            "ir_store_visitid": "2cd5efc2-2e81-e811-a957-000d3a1d51a5"
        }, {
            "@odata.etag": "W/\"1895074459\"",
            "ir_name": "S0003 Priority:3",
            "ir_status@OData.Community.Display.V1.FormattedValue": "Scheduled",
            "ir_status": 100000000,
            "ir_visit_date@OData.Community.Display.V1.FormattedValue": "7/8/2019",
            "ir_visit_date": "2019-07-08",
            "ir_store_visitid": "61fda260-3081-e811-a95b-000d3a1d51b4"
        }, {
            "@odata.etag": "W/\"1895074460\"",
            "ir_name": "S0003 Priority:3",
            "ir_status@OData.Community.Display.V1.FormattedValue": "Cancelled",
            "ir_status": 100000000,
            "ir_visit_date@OData.Community.Display.V1.FormattedValue": "7/9/2019",
            "ir_visit_date": "2019-07-09",
            "ir_store_visitid": "92708ed6-2976-e811-a955-000d3a1d5264"
        }, {
            "@odata.etag": "W/\"1895074461\"",
            "ir_name": "S0007 Priority:8",
            "ir_status@OData.Community.Display.V1.FormattedValue": "Scheduled",
            "ir_status": 100000000,
            "ir_visit_date@OData.Community.Display.V1.FormattedValue": "12/04/2019",
            "ir_visit_date": "2019-12-04",
            "ir_store_visitid": "7f4b8891-3976-e811-a955-000d3a1d531d"
        }, {
            "@odata.etag": "W/\"1895074463\"",
            "ir_name": "S0020 Priority:4",
            "ir_status@OData.Community.Display.V1.FormattedValue": "Scheduled",
            "ir_status": 100000000,
            "ir_visit_date@OData.Community.Display.V1.FormattedValue": "12/06/2019",
            "ir_visit_date": "2019-12-06",
            "ir_store_visitid": "bd54b3df-417e-e811-a956-000d3a1d531d"
        }]
    }];

    console.log(results);

    var visits = [];
    var recordCount = results["@odata.count"];
    for (var i = 0; i < results[0].value.length; i++) {

        visits.push({
            id: results[0].value[i].ir_store_visitid,
            title: results[0].value[i]["ir_name"],
            description: '* My event description <br> * second lines <br> * third lien',
            start: results[0].value[i]["ir_visit_date"],
            end: results[0].value[i]["ir_visit_date"],
            //color: '#378006'
        });

    }

    // Or... manually filled...
    /* 
    var visits= [
        { title: "All Day Event",start: "2019-06-20" },
        { title: "All Day Event2",start: "2019-06-20" },
        { title: "Long Event", start: "2019-06-18", end: "2019-06-23" },
        { id: "999", title: "Repeating Event", start: "2019-06-18T16:00:00-05:00" },
        { id: "999", title: "Repeating Event", start: "2019-06-19T16:00:00-05:00" },
        { id: "999", title: "Repeating Event", start: "2019-06-20T16:00:00-05:00" },
        { title: "Syste Event", start: "2019-06-11", end: "2019-06-13" },
        { title: "Meeting", start: "2019-06-12T10:30:00-05:00", end: "2019-06-12T12:30:00-05:00" },
        { title: "Lunch", start: "2019-06-12T12:00:00-05:00" },
        { title: "Meeting", start: "2019-06-12T14:30:00-05:00" },
        { title: "Happy Hour", start: "2019-06-12T17:30:00-05:00" },
        { title: "Dinner", start: "2019-06-12T20:00:00" },
        { title: "Birthday Party", start: "2019-06-19T07:00:00-05:00" },
        { title: "Click for Google", url: "http://google.com/", start: "2019-06-23" },
        { title: "NSM", start: '2019-06-25', end: '2019-06-30', overlap: false, rendering: 'background', color: '#ff9f89' },
    ];
    */

    $('.message .close').on('click', function () {
        $(this).closest('.message').transition('fade');
        var calHeight = $(window).height() * 0.78;
        $('#calendar').fullCalendar('option', 'height', calHeight);
    });

    $(window).resize(function () {
        var calHeight = $(window).height() * 0.78;
        $('#calendar').fullCalendar('option', 'height', calHeight);
    });


    $('#calendar').fullCalendar({
        header: {
            left: 'cPrev,cNext', //'prev,next today',
            center: 'title',
            right: 'week,twoWeeks,list2Weeks' //'month,basicWeek,listWeek'
        },
        defaultView: 'week',
        views: {
            week: {
                type: 'basicWeek',
                duration: {
                    weeks: 1
                },
                buttonText: 'week'
            },
            twoWeeks: {
                type: 'basicWeek',
                duration: {
                    weeks: 2
                },
                rows: 2,
                buttonText: '2 weeks'
            },
            list2Weeks: {
                type: 'listWeek',
                duration: {
                    weeks: 2
                },
                buttonText: 'list'
            }
        },
        customButtons: {
            cPrev: {
                text: ' < ',
                click: function () {
                    $('#calendar').fullCalendar('prev'); // call method
                    var b = $('#calendar').fullCalendar('getDate');
                    startOfWeek = moment(b).startOf('week').format('YYYY-MM-DD');
                    endOfWeek = moment(b).add(1, 'weeks').endOf('week').format('YYYY-MM-DD');
                }
            },
            cNext: {
                text: ' > ',
                click: function () {
                    $('#calendar').fullCalendar('next'); // call method
                    var b = $('#calendar').fullCalendar('getDate');
                    startOfWeek = moment(b).startOf('week').format('YYYY-MM-DD');
                    endOfWeek = moment(b).add(1, 'weeks').endOf('week').format('YYYY-MM-DD');
                }
            },
        },
        allDayText: "",
        businessHours: {
            // days of week. an array of zero-based day of week integers (0=Sunday)
            dow: [1, 2, 3, 4, 5, 6], // Monday - Saturday
            start: '08:00', // start time 
            end: '17:30', // end time 
        },
        height: $(window).height() * 0.63,
        weekNumbers: false,
        weekNumbersWithinDays: false,
        weekNumberCalculation: 'ISO',
        columnFormat: "ddd D", // Ex. Sun 8
        firstDay: 0, // Sunday
        timezone: "local", // false (default), 'local', 'UTC', a timezone string ('America/Chicago')
        defaultDate: moment().toISOString(), //'2019-03-12',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        //events: visits,
        eventSources: [{
                events: visits
            },
            // Manually added events (not from result array)
            {
                events: [{
                        title: 'Event 3',
                        start: '2019-12-25'
                    },
                    {
                        title: 'Event 4',
                        start: '2019-12-26'
                    }
                ],
            }
        ],
        droppable: true, // this allows things to be dropped onto the calendar
        eventBackgroundColor: '#DDF3FE',
        eventTextColor: '#000',
        selectable: true,
        eventDrop: function (event, delta, revertFunc) {
            var start = event.start.toISOString();
            console.log(start);
            console.log(moment().toISOString());
            if (moment(start).isSameOrAfter(moment().toISOString(), 'date'))
                alert("allowed");
            else
                revertFunc();

            /*if (!confirm("Are you sure that you want to move the event " + event.title + " to " + event.start.format('LLLL') + "?")) {
              revertFunc();
            }*/
        },
        eventClick: function (event, jsEvent, view) {
            // change the border color just for fun
            $('.fc-event').css('border-color', '#ddd');
            $(this).css('border-color', 'orange');
        },
        eventResize: function (event, delta, revertFunc) {
            if (!confirm("Are you sure to change event " + event.title + " to " + event.start.format('LLLL') + "?")) {
                revertFunc();
            }
        },
        eventRender: function (event, element) {
            element.popup({
                html: event.title + "<br>" + event.description
            });

            var title = element.find('.fc-title');
            title.html('<a href="#" id="' + event.id + '" onclick="storeVisitRedirect(this);" style="font-size:15px;">' + title.text() + '</a>');

            if (event.description) {
                element.find('.fc-title').after("<span class=\"myClass\">" + event.description + "</span>");
            }


            element.bind('mousedown', function (e) {
                if (e.which == 3) { // Right Click

                    if (confirm("Proceed deleting event " + event.title + " to " + event.start.format('LLLL') + "?"))
                        $('#calendar').fullCalendar('removeEvents', event._id);
                }
            });

            element.bind('dblclick', function () {
                alert('double click!');
            });
        }
    });

    $('.ui.dropdown').dropdown();

    $('#resetDropDown').on('click', function () {
        $('#usersDD').dropdown('restore defaults');
    });

    $('#filterData').on('click', function () {
        alert($("#usersDD").dropdown("get value"));
    });
}

function storeVisitRedirect(e) {
    alert(e.id);
}