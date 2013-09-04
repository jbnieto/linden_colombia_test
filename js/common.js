GolfExample = {};

GolfExample.CourseActivity = {
    id: "http://tincanapi.com/JsTetris_TCAPI",
    definition: {
        type: "http://adlnet.gov/expapi/activities/course",
        name: {
            "en-US": "Testing"
        },
        description: {
            "en-US": "Testing ..."
        }
    }
};

GolfExample.getContext = function(parentActivityId) {
    var ctx = {
        contextActivities: {
            grouping: {
                id: GolfExample.CourseActivity.id
            }
        }
    };
    if (parentActivityId !== undefined && parentActivityId !== null) {
        ctx.contextActivities.parent = {
            id: parentActivityId
        };
    }
    return ctx;
};