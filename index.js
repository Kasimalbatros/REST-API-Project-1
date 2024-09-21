const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
    { id: 1, name: "jasmin", age: 25, email: "jasmin@example.com" },
    { id: 2, name: "Hellows", age: 30, email: "hellows@example.com" }
];

// PATCH request to update specific fields of a user by id
app.patch("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const updates = req.body;

    // Find the user with the given id
    const user = users.find(u => u.id === id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    // Update only the provided fields
    Object.assign(user, updates);

    res.json({ message: "User updated", user });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
