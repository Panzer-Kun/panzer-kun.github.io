//Retrieve all list item
GET https://{https://fshr.sharepoint.com/teams/LAN_IT_O365/Lists/Asset manager/AllItems.aspx}/_api/lists/getbytitle('{list_name}')/items
Authorization: "Bearer " + accessToken
Accept: "application/json;odata=verbose"

//Retrieve specific list item
GET https://{site_url}/_api/web/lists/GetByTitle('Test')/items({item_id})
Authorization: "Bearer " + accessToken
Accept: "application/json;odata=verbose"


//Retrieve a specific list if you know its title.
GET https://{site_url}/_api/web/lists/GetByTitle('List Title')
Authorization: "Bearer " + accessToken
Accept: "application/json;odata=verbose"


fetch(searchEngineURL + window.location.search + '&model=glove')
        .then(response => {
            if (response.ok) {
                return response.json();
