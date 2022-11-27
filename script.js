https://{}/_api/web/lists/GetByTitle('Test')/items

fetch(searchEngineURL + window.location.search + '&model=glove')
        .then(response => {
            if (response.ok) {
                return response.json();
