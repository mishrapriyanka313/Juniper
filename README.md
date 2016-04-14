# Juniper
Data Flow Between two Virtual Networks

UI based Juniper Website that allow user to fetch details of the traffic from the database between any two virtual networks.
Flow statistics based on various select criteria. The backend renders the user request and formats it to an SQL query and fetches results by interacting with the database. The results are then rendered to the user. The database is implemented in SQL and it holds the flow table that holds the data that will be queried by the backend infra using rich JavaScript library NodeJs. 
