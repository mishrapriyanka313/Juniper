# Juniper
Data Flow Between two Virtual Networks

UI based Juniper Website that allow user to fetch details of the traffic from the database between any two virtual networks.
Flow statistics based on various select criteria. The backend renders the user request and formats it to an SQL query and fetches results by interacting with the database. The results are then rendered to the user. The database is implemented in SQL and it holds the flow table that holds the data that will be queried by the backend infra using rich JavaScript library NodeJs. 


Create a NodeJs Project in WebStrom IDE
https://www.jetbrains.com/webstorm/

# Getting Started with the Document

1. Make sure You have node.js installed and add it to the $PATH. This will make sure your 'node' command in your terminal works.
2. Using your terminal or your command prompt, go to the folder which points to the root Juniper folder where server.js is present.
3. In the command line run the command: 'node server.js'. This will start the server.
4. Go to your browser window and goto the following address 'http://localhost:3000'. It should automatically redirect you to http://localhost:3000/client.
5. Afer this use the links below or type 'http://localhost:3000/client/DataFlow.html' in your web browser to go to the main application window.
6. Please go through Juniper Network.docx document attached for further deatils.
