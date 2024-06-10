body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    margin: 0;
}

.container {
    text-align: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 2em;
    margin-bottom: 20px;
}

.game {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.choices {
    margin-bottom: 20px;
}

.choice {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.choice:hover {
    background-color: #45a049;
}

.result p {
    font-size: 1.2em;
    margin: 5px 0;
}
