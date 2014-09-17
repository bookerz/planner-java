$(document).ready(function () {

    $('#jTableContainer').jtable({
        title: 'Match log',
        paging: true, //Enable paging
        pageSize: 10, //Set page size (default: 10)
        sorting: true, //Enable sorting
        defaultSorting: 'Name ASC', //Set default sorting
        actions: {
            listAction: 'joblog'
        },
        fields: {
            id: {
                key: true,
                create: false,
                edit: false,
                list: true
            },
            stringId: {
                title: 'sId'
            },
            jobId: {
                title: 'jobId',
                width: '23%'
            },
            inCompleteName: {
                title: 'In name'

            },
            inCountryId: {
                title: 'In country'
            },
            inAddress: {
                title: 'In address'
            },
            inPartType: {
                title: 'In part type'
            },
            inPhoneNumber: {
                title: 'In phone'
            },
            inWorkplaceId: {
                title: 'In workplaceId'
            },
            status: {
                title: 'Status'
            },
            ecoId: {
                title: 'Eco id'
            },
            matchByMethodName: {
                title: 'Method'
            },
            outCompleteName: {
                title: 'matchName'
            },
            outEpcCode: {
                title: 'epc code'
            },
            outCountryId: {
                title: 'outCountry'
            },
            outLegalId: {
                title: 'outLegalId'
            },
            outAddress: {
                title: 'out address'
            },
            outPartType: {
                title: 'outType'
            },
            outPhoneNumber: {
                title: 'out phoneNr'
            },
            outWorkplaceId: {
                title: 'workplaceId'
            },
            generatedSolrQuery: {
                title: 'solr',
                display: function (data) {
                    return "<a href=" + data.record.generatedSolrQuery + ">Solr</a>";
                }
            },
            adminUrl: {
                title: 'eco admin',
                display: function (data) {
                    return "<a href=" + data.record.adminUrl + ">Ecoadmin</a>";
                }
            },
            response: {
                title: 'Response',
                display: function (data) {
                    return JSON.stringify(data.record.response, null, '\t');
                }
            },
            request: {
                title: 'Request',
                display: function (data) {
                    return JSON.stringify(data.record.request, null, '\t');
                }
            }

        }
    });


    $("#search-button").click(function () {
        $('#jobTable').jtable('load', '{jobId:' + $('#jobId').val() + '}');
        //Get stat of current job from server
        $.get("joblog/" + $('#jobId').val() + "/stat",
            function (data) {
                console.debug(data.singleHits);
                $("#single_hits_placeholder").text(formatStat(data.singleHits, data.totalRequests));
                $("#no_hits_placeholder").text(formatStat(data.noHits, data.totalRequests));
                $("#multiple_hits_placeholder").text(formatStat(data.multipleHits, data.totalRequests));
                $("#total_request_placeholder").text(data.totalRequests);

            });

    });
    function formatStat(hits, total) {
        if (total == 0) {
            return "";
        }
        return hits + " (" + (hits * 100) / total + "%)";
    }

    $("#delete-button").click(function () {
        //confirm ???
        $.ajax({
            url: 'joblog/' + $('#jobId').val(),
            type: 'DELETE',
            success: function () {
                $('#search-button').click();
            }
        });
    });

    //Init load
    $('#search-button').click();

});