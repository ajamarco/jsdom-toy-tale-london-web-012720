class HTTPRequests{
    get(url) {
        return new Promise((resolve, reject) => {
          fetch(url)
          .then(res => res.json())
          .then(data => resolve(data))
          .catch(err => reject(err));
        });
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
          fetch(url, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
               Accept: "application/json"
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data => resolve(data))
          .catch(err => reject(err));
        });
    }

    put(url, data) {
        return new Promise((resolve, reject) => {
          fetch(url, {
            method: 'PATCH',
            headers: {
              'Content-type': 'application/json',
              Accept: "application/json"
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data => resolve(data))
          .catch(err => reject(err));
        });
      }

}