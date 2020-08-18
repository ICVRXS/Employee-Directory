const express = require ("express");
const path = require ("path");
const app = express();
const PORT = process.env.PORT || 8080;
const publicPath = path.join(__dirname, "../employeedirectory", "build");

app.use(express.static(publicPath));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});
