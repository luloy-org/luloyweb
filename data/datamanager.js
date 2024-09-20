initSqlJs().then(function(SQL) {
      // Create a new database
      const db = new SQL.Database();

      // Create a table
      db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT);");

      // Insert data
      db.run("INSERT INTO users (name, email) VALUES (?, ?), (?, ?), (?, ?);", 
        ["John Doe", "john@example.com", "Jane Smith", "jane@example.com", "Alice Johnson", "alice@example.com"]);

      // Query data
      const result = db.exec("SELECT * FROM users;");
      // Display the results
      let outputDiv = document.getElementById('output');
      result[0].values.forEach(row => {
        outputDiv.innerHTML += `ID: ${row[0]}, Name: ${row[1]}, Email: ${row[2]}<br>`;
      });
      const data = db.export()
    });

    