# URL shortener and file share

## Project informations
Simple url shortener and file sharing service. I'm making this for fun and to improve my front-end skills. If you have any ideas for project or tips for me, let me know.

URL shortener idea by tsoding on one of his [porth development video](https://www.youtube.com/watch?v=8QP2fDBIxjM&list=PLpM-Dvs8t0VbMZA7wW9aR3EtBqe2kinu4)

## System informations
* Node:       v17.3.0
* OS Name:    Microsoft Windows 10 Pro
* OS Version: 10.0.19044 N/A Build 19044


## Installation

use NPM for installation

```bash 
npm install
```

## Usage
Start server
```bash
npm start
```

Start server with reload on file changes
```bash
npm run dev
```

App will run on **http://localhost:3000**. default port for server is **3000** but can be changed in **./config/config.json**

## Roadmap
* [X] Add url's to database
* [X] Redirect to url by id eg. (http://localhost:3000/url/id -> https://github.com/Nyjako/url-shortener-and-file-share)
* [X] Add files to server
* [X] Download files by correct url
* [ ] Make some kind of upload/url adding limitation
* [ ] Check if files are already on the server
* [ ] Would be cool to have some kind of upload progress bar
* [ ] Removing files after some time, let user decide how long with maximum time
* [ ] wait some time before downloading/redirecting and show page with file/url info

## License
[MIT](https://choosealicense.com/licenses/mit/)