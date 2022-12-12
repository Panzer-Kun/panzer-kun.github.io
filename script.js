
GET https://{https://fshr.sharepoint.com/teams/LAN_IT_O365/Lists/Asset manager/AllItems.aspx}/_api/lists/getbytitle('{list_name}')/items
Authorization: "Bearer " + accessToken
Accept: "application/json;odata=verbose"

fetch(searchEngineURL + window.location.search + '&model=glove')
        .then(response => {
            if (response.ok) {
                return response.json();
